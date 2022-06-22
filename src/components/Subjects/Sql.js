import React from 'react'
import "./dbms.css";

function Dbms() {
    let string = `NULL Value: It is not possible to test for NULL values with comparison operators, such as =, <, or We will have to use the IS NULL and IS NOT NULL operators instead. 
    Syntax –
    ●SELECT column_names 
    FROM table_name 
    WHERE column_name IS NULL; 
    ●SELECT column_names 
    FROM table_name 
    WHERE column_name IS NOT NULL;
    Ex –
    ●SELECT CustomerName, ContactName, Address
    FROM Customers 
    WHERE Address IS NULL;`;
    let str2 = "WHERE ROWNUM <= number;";
    let str3 = ">";
    return (
        <div className="container container-custom" style={{ textAlign: 'center', marginTop: "1.5rem" }}>
            <h3>SQL Notes 🚀</h3>
            <div className="info" style={{ textAlign: 'left' }}>
            <img src="https://user-images.githubusercontent.com/65703138/150641076-dd864e47-41fd-46e5-87a5-6e4c34326c96.png" style={{width:"100%"}} />
                    <img src="https://user-images.githubusercontent.com/65703138/150641077-f19c4ada-751b-4117-ae25-a3c573928c80.png" style={{width:"100%"}} />
                <p><span>SQL:</span>
                    SQL is a standard language for storing, manipulating and retrieving data in databases.
                </p>

                <p><span>DDL:</span>
                    DDL is short name of Data Definition Language, which deals with database schemas and
                    descriptions, of how the data should reside in the database. <br />
                    ●CREATE - to create a database and its objects like (table, index, views, store procedure,
                    function, and triggers) <br />
                    ●ALTER - alters the structure of the existing database <br />
                    ●DROP - delete objects from the database <br />
                    ●TRUNCATE - remove all records from a table, including all spaces allocated for the
                    records are removed <br />
                    ●RENAME - rename an object
                </p>

                <p><span>DML:</span>
                    DML is short name of Data Manipulation Language which deals with data manipulation and
                    includes most common SQL statements such SELECT, INSERT, UPDATE, DELETE, etc., and it is
                    used to store, modify, retrieve, delete and update data in a database. <br />
                    ●SELECT - retrieve data from a database <br />
                    ●INSERT - insert data into a table <br />
                    ●UPDATE - updates existing data within a table <br />
                    ●DELETE - Delete all records from a database table <br />
                    ●MERGE - UPSERT operation (insert or update)
                </p>

                <p><span>DCL:</span>
                    DCL is short name of Data Control Language which includes commands such as GRANT and
                    mostly concerned with rights, permissions and other controls of the database system. <br />
                    ●GRANT - allow users access privileges to the database <br />
                    ●REVOKE - withdraw users access privileges given by using the GRANT command
                </p>


                <p><span>TCL:</span>
                    TCL is short name of Transaction Control Language which deals with a transaction within a
                    database. <br />
                    ●COMMIT - commits a Transaction <br />
                    ●ROLLBACK - rollback a transaction in case of any error occurs <br />
                    ●SAVEPOINT - to roll back the transaction making points within groups</p>

                <p><span>Select:</span>
                    The SELECT statement is used to select data from a database <br />
                    Syntax <br />
                    SELECT column1, column2, ... <br />
                    FROM table_name; <br />
                    Here, column1, column2, ... are the field names of the table you want to select data <br />
                    from. If you want to select all the fields available in the table, use the following syntax <br />
                    SELECT * FROM table_name; <br />

                    Ex – <br />
                    ●SELECT CustomerName, City FROM Customers;
                </p>

                <p><span>SELECT DISTINCT:</span>
                    The SELECT DISTINCT statement is used to return only distinct (different) values.  <br />
                    Syntax – <br />
                    ●SELECT DISTINCT column1, column2, ... <br />
                    FROM table_name; <br />
                    Ex – <br />
                    ●SELECT DISTINCT Country FROM Customers;</p>

                <p><span>WHERE:</span>
                    The WHERE clause is used to filter records. <br />
                    Syntax – <br />
                    ●SELECT column1, column2, ... <br />
                    FROM table_name <br />
                    WHERE condition; <br />
                    Ex – <br />
                    ●SELECT * FROM Customers <br />
                    WHERE Country='Mexico'</p>

                <p><span>AND, OR and NOT:</span>
                    The WHERE clause can be combined with AND, OR, and NOT operators. <br />
                    The AND and OR operators are used to filter records based on more than one condition: <br />
                    ●The AND operator displays a record if all the conditions separated by AND are TRUE. <br />
                    ●The OR operator displays a record if any of the conditions separated by OR is TRUE. <br />
                    The NOT operator displays a record if the condition(s) is NOT TRUE. <br />
                    Syntax – <br />
                    ●SELECT column1, column2, ... <br />
                    FROM table_name <br />
                    WHERE condition1 AND condition2 AND condition3 ...;<br />
                    ●SELECT column1, column2, ...<br />
                    FROM table_name<br />
                    WHERE condition1 OR condition2 OR condition3 ...; <br />
                    ●SELECT column1, column2, ...<br />
                    FROM table_name<br />
                    WHERE NOT condition;<br />
                    Ex –<br />
                    ●SELECT * FROM Customers<br />
                    WHERE Country='Germany' AND City='Berlin';<br />
                    ●SELECT * FROM Customers <br />
                    WHERE Country='Germany' AND (City='Berlin' OR City='München');</p>

                <p><span>ORDER BY:</span>
                    The ORDER BY keyword is used to sort the result-set in ascending or descending order.
                    The ORDER BY keyword sorts the records in ascending order by default. To sort the records in
                    descending order, use the DESC keyword. <br />
                    Syntax – <br />
                    ●SELECT column1, column2, ... <br />
                    FROM table_name <br />
                    ORDER BY column1, column2, ... ASC|DESC; <br />
                    Ex – <br />
                    ●SELECT * FROM Customers <br />
                    ORDER BY Country; <br />
                    ●SELECT * FROM Customers <br />
                    ORDER BY Country ASC, CustomerName DESC;</p>

                <p><span>INSERT INTO:</span>
                    The INSERT INTO statement is used to insert new records in a table. <br />
                    Syntax – <br />
                    ●INSERT INTO table_name (column1, column2, column3, ...) <br />
                    VALUES (value1, value2, value3, ...); <br />
                    ●INSERT INTO table_name <br />
                    VALUES (value1, value2, value3, ...); <br />
                    *In the second syntax, make sure the order of the values is in the same order as the columns in
                    the table. <br />
                    Ex – <br />
                    ●INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode,
                    Country) <br />
                    VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');</p>

                <p>
                    {string}
                </p>


                <p><span>UPDATE:</span>
                    The UPDATE statement is used to modify the existing records in a table. <br />
                    Syntax – <br />
                    ●UPDATE table_name <br />
                    SET column1 = value1, column2 = value2, ... <br />
                    WHERE condition; <br />
                    Ex – <br />
                    ●UPDATE Customers <br />
                    SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
                    WHERE CustomerID = 1;</p>

                <p><span>DELETE:</span>
                    The DELETE statement is used to delete existing records in a table. <br />
                    Syntax – <br />
                    ●DELETE FROM table_name WHERE condition; <br />
                    ●DELETE FROM table_name; <br />
                    In 2ndsyntax, all rows are deleted. The table structure, attributes, and indexes will be intact <br />
                    Ex – <br />
                    ●DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';</p>

                <p><span>SELECT TOP:</span>
                    The SELECT TOP clause is used to specify the number of records to return. <br />
                    Syntax – <br />
                    ●SELECT TOP number|percent column_name(s) <br />
                    FROM table_name <br />
                    WHERE condition; <br />
                    ●SELECT column_name(s) <br />
                    FROM table_name <br />
                    WHERE condition <br />
                    LIMIT number; <br />
                    ●SELECT column_name(s) <br />
                    FROM table_name <br />
                    ORDER BY column_name(s) <br />
                    FETCH FIRST number ROWS ONLY; <br />
                    ●SELECT column_name(s) <br />
                    FROM table_name <br />
                    {str2} <br />
                    *In case the interviewer asks other than the TOP, rest are also correct. (Diff. DB Systems) <br />
                    Ex – <br />
                    ●SELECT TOP 3 * FROM Customers; <br />
                    ●SELECT * FROM Customers <br />
                    LIMIT 3; <br />
                    ●SELECT * FROM Customers <br />
                    FETCH FIRST 3 ROWS ONLY;</p>

                <p><span>Aggregate Functions:</span>
                    MIN(): <br />
                    The MIN() function returns the smallest value of the selected column. <br />
                    Syntax – <br />
                    ●SELECT MIN(column_name) <br />
                    FROM table_name <br />
                    WHERE condition; <br />
                    Ex – <br />
                    ●SELECT MIN(Price) AS SmallestPrice <br />
                    FROM Products; <br /> <br />
                    MAX(): <br />
                    The MAX() function returns the largest value of the selected column. <br />
                    Syntax – <br />
                    ●SELECT MAX(column_name) <br />
                    FROM table_name <br />
                    WHERE condition; <br />
                    Ex – <br />
                    ●SELECT MAX(Price) AS LargestPrice <br />
                    FROM Products; <br /> <br />
                    COUNT(): <br />
                    The COUNT() function returns the number of rows that matches a specified criterion. <br />
                    Syntax – <br />
                    ●SELECT COUNT(column_name) <br />
                    FROM table_name <br />
                    WHERE condition; <br />
                    Ex – <br />
                    ●SELECT COUNT(ProductID) <br />
                    FROM Products;<br /><br />
                    AVG():<br />
                    The AVG() function returns the average value of a numeric column.<br />
                    Syntax –<br />
                    ●SELECT AVG(column_name)<br />
                    FROM table_name<br />
                    WHERE condition;<br />
                    Ex –<br />
                    ●SELECT AVG(Price)<br />
                    FROM Products;<br /><br />
                    SUM():<br />
                    The SUM() function returns the total sum of a numeric column.<br />
                    Syntax –<br />
                    ●SELECT SUM(column_name)<br />
                    FROM table_name<br />
                    WHERE condition;<br />
                    Ex –<br />
                    ●SELECT SUM(Quantity)<br />
                    FROM OrderDetails;<br />

                    <p><span>LIKE Operator:</span>
                        The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. <br />
                        There are two wildcards often used in conjunction with the LIKE operator: <br />
                        ●The percent sign (%) represents zero, one, or multiple characters<br />
                        ●The underscore sign (_) represents one, single character<br />
                        Syntax –<br />
                        ●SELECT column1, column2, ... <br />
                        FROM table_name <br />
                        WHERE columnN LIKE pattern; <br />
                        WHERE CustomerName LIKE 'a%' --- Finds any values that start with "a"<br />
                        WHERE CustomerName LIKE '%a' --- Finds any values that end with "a"<br />
                        WHERE CustomerName LIKE '%or%' --- Finds any values that have "or" in any position<br />
                        WHERE CustomerName LIKE '_r%' --- Finds any values that have "r" in the second position<br />
                        WHERE CustomerName LIKE 'a_%' --- Finds any values that start with "a" and are at
                        least 2 characters in length<br />
                        WHERE CustomerName LIKE 'a__%' --- Finds any values that start with "a" and are at
                        least 3 characters in length<br />
                        WHERE ContactName LIKE 'a%o' --- Finds any values that start with "a" and ends with "o"
                    </p>

                    <p><span> IN:</span>
                        The IN operator allows you to specify multiple values in a WHERE clause. <br />
                        The IN operator is a shorthand for multiple OR conditions. <br />
                        Syntax –<br />
                        ●SELECT column_name(s)<br />
                        FROM table_name<br />
                        WHERE column_name IN (value1, value2, ...);<br />
                        ●SELECT column_name(s)<br />
                        FROM table_name<br />
                        WHERE column_name IN (SELECT STATEMENT);<br />
                        Ex –<br />
                        ●SELECT * FROM Customers<br />
                        WHERE Country IN ('Germany', 'France', 'UK');<br />
                        ●SELECT * FROM Customers<br />
                        WHERE Country IN (SELECT Country FROM Suppliers);</p>
                </p>

                <p><span>BETWEEN:</span>
                    The BETWEEN operator selects values within a given range. The values can be numbers, text, or
                    dates. <br />
                    The BETWEEN operator is inclusive: begin and end values are included. <br />
                    Syntax –<br />
                    ●SELECT column_name(s)<br />
                    FROM table_name<br />
                    WHERE column_name BETWEEN value1 AND value2;<br />
                    Ex –<br />
                    ●SELECT * FROM Products<br />
                    WHERE Price BETWEEN 10 AND 20;</p>

                <p><span> Joins:</span>
                    A JOIN clause is used to combine rows from two or more tables, based on a related column<br />
                    between them.<br /><br />
                    INNER JOIN:<br />
                    The INNER JOIN keyword selects records that have matching values in both tables.<br />
                    Syntax –<br />
                    ●SELECT column_name(s)<br />
                    FROM table1<br />
                    INNER JOIN table2<br />
                    ON table1.column_name = table2.column_name;<br />
                    Ex –<br />
                    ●SELECT Orders.OrderID, Customers.CustomerName<br />
                    FROM Orders<br />
                    INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;<br /><br />
                    LEFT (OUTER) JOIN:<br />
                    The LEFT JOIN keyword returns all records from the left table (table1), and the matching records
                    from the right table (table2). The result is 0 records from the right side, if there is no match.<br />
                    Syntax –<br />
                    ●SELECT column_name(s)<br />
                    FROM table1<br />
                    LEFT JOIN table2<br />
                    ON table1.column_name = table2.column_name;<br />
                    Ex –<br />
                    ●SELECT Customers.CustomerName, Orders.OrderID<br />
                    FROM Customers<br />
                    LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID<br />
                    ORDER BY Customers.CustomerName;<br /><br />
                    RIGHT (OUTER) JOIN:<br />
                    The RIGHT JOIN keyword returns all records from the right table (table2), and the matching<br />
                    records from the left table (table1). The result is 0 records from the left side, if there is no
                    match.<br />
                    Syntax –<br />
                    ●SELECT column_name(s)<br />
                    FROM table1<br />
                    RIGHT JOIN table2<br />
                    ON table1.column_name = table2.column_name;<br />
                    Ex –<br />
                    ●SELECT Orders.OrderID, Employees.LastName, Employees.FirstName<br />
                    FROM Orders<br />
                    RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID<br />
                    ORDER BY Orders.OrderID;<br /><br />
                    FULL (OUTER) JOIN:<br />
                    The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right
                    (table2) table records.<br />
                    Syntax:<br />
                    ●SELECT column_name(s)<br />
                    FROM table1<br />
                    FULL OUTER JOIN table2<br />
                    ON table1.column_name = table2.column_name<br />
                    WHERE condition;<br />
                    Ex –<br />
                    ●SELECT Customers.CustomerName, Orders.OrderID<br />
                    FROM Customers<br />
                    FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID<br />
                    ORDER BY Customers.CustomerName;</p>

                <p><span>UNION:</span>
                    The UNION operator is used to combine the result-set of two or more SELECT statements.<br />
                    ●Every SELECT statement within UNION must have the same number of columns<br />
                    ●The columns must also have similar data types<br />
                    ●The columns in every SELECT statement must also be in the same order<br />
                    The UNION operator selects only distinct values by default. To allow duplicate values,
                    use UNION ALL<br />
                    Syntax –<br />
                    ●SELECT column_name(s) FROM table1<br />
                    UNION<br />
                    SELECT column_name(s) FROM table2;<br />
                    ●SELECT column_name(s) FROM table1<br />
                    UNION ALL<br />
                    SELECT column_name(s) FROM table2;<br />
                    Ex –<br />
                    ●SELECT City FROM Customers<br />
                    UNION<br />
                    SELECT City FROM Suppliers<br />
                    ORDER BY City;<br />
                </p>

                <p><span>GROUP BY:</span>
                    The GROUP BY statement groups rows that have the same values into summary rows, like "find
                    the number of customers in each country".<br />
                    The GROUP BY statement is often used with aggregate functions<br />
                    (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more
                    columns.<br />
                    Syntax –<br />
                    ●SELECT column_name(s)
                    FROM table_name
                    WHERE condition
                    GROUP BY column_name(s)
                    ORDER BY column_name(s);<br />
                    Ex –<br />
                    ●SELECT COUNT(CustomerID), Country
                    FROM Customers
                    GROUP BY Country
                    ORDER BY COUNT(CustomerID) DESC;</p>

                <p><span>HAVING:</span>
                    The HAVING clause was added to SQL because the WHERE keyword cannot be used with
                    aggregate functions.<br />
                    *WHERE is given priority over HAVING.<br />
                    Syntax –<br />
                    ●SELECT column_name(s)
                    FROM table_name
                    WHERE condition
                    GROUP BY column_name(s)
                    HAVING condition
                    ORDER BY column_name(s);<br />
                    Ex –<br />
                    ●SELECT COUNT(CustomerID), Country
                    FROM Customers
                    GROUP BY Country
                    HAVING COUNT(CustomerID) {str3} 5;</p>

                <p><span>CREATE DATABASE:</span>
                    The CREATE DATABASE statement is used to create a new SQL database. <br />
                    Syntax –<br />
                    ●CREATE DATABASE databasename;<br />
                </p>

                <p><span>DROP DATABASE:</span>
                    The DROP DATABASE statement is used to drop an existing SQL database. <br />
                    Syntax –<br />
                    ●DROP DATABASE databasename;</p>

                <p><span>TRUNCATE TABLE:</span>
                    The TRUNCATE TABLE statement is used to delete the data inside a table, but not the table itself.<br />
                    Syntax –<br />
                    ●TRUNCATE TABLE table_name;</p>


                <p><span>ALTER TABLE:</span>
                    The ALTER TABLE statement is used to add, delete, or modify columns in an existing table. <br/>
                    The ALTER TABLE statement is also used to add and drop various constraints on an existing
                    table.<br/>
                    Syntax –<br/>
                    ●ALTER TABLE table_name
                    ADD column_name datatype;<br/>
                    ●ALTER TABLE table_name
                    DROP COLUMN column_name;<br/>
                    ●ALTER TABLE table_name
                    MODIFY COLUMN column_name datatype;<br/>
                    Ex –<br/>
                    ●ALTER TABLE Customers
                    ADD Email varchar(255);<br/>
                    ●ALTER TABLE Customers
                    DROP COLUMN Email;<br/>
                    ●ALTER TABLE Persons
                    ALTER COLUMN DateOfBirth year;</p>
            </div>
        </div>
    )
}


export default Dbms