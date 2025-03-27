function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");
    console.log("After adding David at index 1:", students); // ["Alice", "David", "Bob", "Charlie"]

    // Check if "Eve" is in the list
    console.log("Does 'Eve' exist?", students.includes("Eve"));  // Should return false

    // Check if "Bob" is in the list
    console.log("Does 'Bob' exist?", students.includes("Bob"));  // Should return true

    // Convert the array to a string with names separated by commas
    console.log("Joined string:", students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}

// Run the main function
manageStudents();

// Test Cases
function runTests() {
    testAddStudent();
    testCheckStudent();
    testJoinStudents();
    testAddAtBeginning();
    testAddAtEnd();
    console.log("All tests passed!");
}

function testAddStudent() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(1, 0, "David");
    console.assert(
        JSON.stringify(students) === JSON.stringify(["Alice", "David", "Bob", "Charlie"]),
        "Test Add Student Failed"
    );
}

function testCheckStudent() {
    let students = ["Alice", "David", "Bob", "Charlie"];
    console.assert(
        students.includes("Eve") === false,
        "Test Check Student (Eve) Failed"
    );
    console.assert(
        students.includes("Bob") === true,
        "Test Check Student (Bob) Failed"
    );
}

function testJoinStudents() {
    let students = ["Alice", "David", "Bob", "Charlie"];
    console.assert(
        students.join(",") === "Alice,David,Bob,Charlie",
        "Test Join Students Failed"
    );
}

function testAddAtBeginning() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(0, 0, "Zack");
    console.assert(
        JSON.stringify(students) === JSON.stringify(["Zack", "Alice", "Bob", "Charlie"]),
        "Test Add at Beginning Failed"
    );
}

function testAddAtEnd() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(students.length, 0, "Zack");
    console.assert(
        JSON.stringify(students) === JSON.stringify(["Alice", "Bob", "Charlie", "Zack"]),
        "Test Add at End Failed"
    );
}

// Run tests
runTests();
