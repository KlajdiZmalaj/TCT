<?php

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tct";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {

    http_response_code(500);
    echo json_encode(array("error" => "Connection failed: " . $conn->connect_error));
    exit();
}

// Set headers to allow cross-origin resource sharing (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Function to create a new product
function createProduct($name, $price, $description)
{

    try {
        global $conn;
        $sql = "INSERT INTO products (name, price, description) VALUES ('$name', '$price', '$description')";
        if ($conn->query($sql) === TRUE) {
            return json_encode(array("message" => "New product created successfully"));
        } else {
            http_response_code(500);
            return json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
        }
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}

// Function to read all products
function readProducts()
{

    try {
        global $conn;
        $sql = "SELECT * FROM products";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $products = array();
            while ($row = $result->fetch_assoc()) {
                $products[] = $row;
            }
            return json_encode($products);
        } else {
            return json_encode(array("message" => "No products found"));
        }
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}

// Function to update a product
function updateProduct($id, $name, $price, $description)
{
    global $conn;
    $updateFields = array();

    if (!empty($name)) {
        $updateFields[] = "name='$name'";
    }
    if (!empty($price)) {
        $updateFields[] = "price='$price'";
    }
    if (!empty($description)) {
        $updateFields[] = "description='$description'";
    }

    if (empty($updateFields)) {
        return json_encode(array("error" => "No fields provided for update"));
    }


    try {
        if ($id) {
            $sql = "UPDATE products SET " . implode(', ', $updateFields) . " WHERE id=$id";

            if ($conn->query($sql) === TRUE) {
                return json_encode(array("message" => "Product updated successfully"));
            } else {
                http_response_code(499);
                return json_encode(array("error" => "Error updating product: " . $conn->error));
            }
        } else {
            return json_encode(array("error" => "ID is missing"));
        }
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}


// Function to delete a product
function deleteProduct($id)
{

    try {
        global $conn;
        $sql = "DELETE FROM products WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            return json_encode(array("message" => "Product deleted successfully"));
        } else {
            http_response_code(500);
            return json_encode(array("error" => "Error deleting product: " . $conn->error));
        }
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}

// Check the HTTP method of the request
$method = $_SERVER['REQUEST_METHOD'];

// Perform action based on the HTTP method
switch ($method) {
    case 'POST':
        // Create a new product
        $data = json_decode(file_get_contents('php://input'), true);
        echo createProduct($data['name'], $data['price'], $data['description']);
        break;
    case 'GET':
        // Read all products
        echo readProducts();
        break;
    case 'PUT':
        // Update a product
        $data =  json_decode(file_get_contents("php://input"), true);
        echo updateProduct($data['id'], $data['name'], $data['price'], $data['description']);

        break;
    case 'DELETE':
        // Delete a product
        $data =  json_decode(file_get_contents("php://input"), true);
        echo deleteProduct($data['id']);
        break;
    default:
        // Invalid method
        http_response_code(405);
        echo json_encode(array("error" => "Invalid request method"));
        break;
}

// Close connection
$conn->close();
