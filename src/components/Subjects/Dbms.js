import React from 'react'
import Er from "../Images/Er.PNG";
import "./dbms.css";

function Dbms() {
    return (
        <div className="container container-custom" style={{ textAlign: 'center', marginTop: "1.5rem" }}>
            <h3>DBMS Notes 🚀</h3>
            <div className="info" style={{ textAlign: 'left' }}>
                <p><span>Database:</span> A database is a collection of related data which represents some aspect of the real
                    world. A database system is designed to be built and populated with data for a certain task.
                </p>

                <p>
                    <span>Database Management System (DBMS) </span>is a software for storing and retrieving users' data while
                    considering appropriate security measures. It consists of a group of programs which manipulate
                    the database. The DBMS accepts the request for data from an application and instructs the
                    operating system to provide the specific data. In large systems, a DBMS helps users and other
                    third-party software to store and retrieve data.
                    Database management systems were developed to handle the following difficulties of
                    typical File-processing systems supported by conventional operating systems.
                    <br />
                    <ol>
                        <li>Data redundancy and inconsistency</li>
                        <li>Difficulty in accessing data</li>
                        <li>Data isolation – multiple files and formats</li>
                        <li>Integrity problems</li>
                        <li>Atomicity of updates</li>
                        <li>Concurrent access by multiple users</li>
                        <li>Security problems</li>
                    </ol>
                </p>

                <p>
                    <span>ER diagram:</span>
                    <ul>
                        <li>ER diagram or Entity Relationship diagram is a conceptual model that gives the
                            graphical representation of the logical structure of the database.
                        </li>
                        <li>It shows all the constraints and relationships that exist among the different components.</li>
                        <li> An ER diagram is mainly composed of following three components- Entity Sets,
                            Attributes and Relationship Set</li>
                        <img src={Er} />
                        <li>Roll_no is a primary key that can identify each entity uniquely.</li>
                        <li>Thus, by using a student's roll number, a student can be identified uniquely.
                        </li>
                    </ul>
                </p>

                <p>
                    <span>Entity Set:</span>
                    An entity set is a set of the same type of entities.<br />
                    <br />
                    ● Strong Entity Set:<br />
                    o A strong entity set is an entity set that contains sufficient attributes to uniquely
                    identify all its entities.<br />
                    o In other words, a primary key exists for a strong entity set.<br />
                    o Primary key of a strong entity set is represented by underlining it.<br /><br />
                    ● Weak Entity Set:<br />
                    o A weak entity set is an entity set that does not contain sufficient attributes to
                    uniquely identify its entities.<br />
                    o In other words, a primary key does not exist for a weak entity set.<br />
                    o However, it contains a partial key called a discriminator.<br />
                    o Discriminator can identify a group of entities from the entity set.<br />
                    o Discriminator is represented by underlining with a dashed line.<br />
                </p>

                <p>
                    <span>Cardinality Constraint:</span>A relationship is defined as an association among several entities.<br />
                    ● Unary Relationship Set - Unary relationship set is a relationship set where only one
                    entity set participates in a relationship set.<br />
                    ● Binary Relationship Set - Binary relationship set is a relationship set where two entity
                    sets participate in a relationship set.<br />
                    ● Ternary Relationship Set - Ternary relationship set is a relationship set where three
                    entity sets participate in a relationship set.<br />
                    ● N-ary Relationship Set - N-ary relationship set is a relationship set where ‘n’ entity sets
                    participate in a relationship set.
                </p>

                <p><span>Cardinality Constraint:</span>Cardinality constraint defines the maximum number of relationship instances in which an entity
                    can participate.
                    ● One-to-One Cardinality - An entity in set A can be associated with at most one entity in
                    set B. An entity in set B can be associated with at most one entity in set A.<br />
                    ● One-to-Many Cardinality - An entity in set A can be associated with any number (zero or
                    more) of entities in set B. An entity in set B can be associated with at most one entity in
                    set A.<br />
                    ● Many-to-One Cardinality - An entity in set A can be associated with at most one entity in
                    set B. An entity in set B can be associated with any number of entities in set A.<br />
                    ● Many-to-Many Cardinality - An entity in set A can be associated with any number (zero or
                    more) of entities in set B. An entity in set B can be associated with any number (zero or
                    more) of entities in set A.
                </p>


                <p><span>Attributes:</span>
                    Attributes are the descriptive properties which are owned by each entity of an Entity Set.
                    Types of Attributes:<br />
                    ● Simple Attributes - Simple attributes are those attributes which cannot be divided
                    further. Ex. Age <br />
                    ● Composite Attributes - Composite attributes are those attributes which are composed
                    of many other simple attributes. Ex. Name, Address<br />
                    ● Multi Valued Attributes - Multi valued attributes are those attributes which can take
                    more than one value for a given entity from an entity set. Ex. Mobile No, Email ID. <br />
                    ● Derived Attributes - Derived attributes are those attributes which can be derived from
                    other attribute(s). Ex. Age can be derived from DOB.<br />
                    ● Key Attributes - Key attributes are those attributes which can identify an entity uniquely
                    in an entity set. Ex. Roll No.
                </p>
                <p>
                    <span>Constraints:</span>
                    Relational constraints are the restrictions imposed on the database contents and
                    operations. They ensure the correctness of data in the database.<br />
                    ● Domain Constraint - Domain constraint defines the domain or set of values for an
                    attribute. It specifies that the value taken by the attribute must be the atomic value from
                    its domain.<br />
                    ● Tuple Uniqueness Constraint - Tuple Uniqueness constraint specifies that all the tuples
                    must be necessarily unique in any relation.<br />
                    ● Key Constraint - All the values of the primary key must be unique. The value of the
                    primary key must not be null.<br />
                    ● Entity Integrity Constraint - Entity integrity constraint specifies that no attribute of
                    primary key must contain a null value in any relation.<br />
                    ● Referential Integrity Constraint - It specifies that all the values taken by the foreign key
                    must either be available in the relation of the primary key or be null.
                </p>

                <p>
                    <span>Closure of an Attribute Set:</span>
                    The set of all those attributes which can be functionally determined from an attribute set is
                    called a closure of that attribute set. <br />
                    <span>Keys</span>:
                    A key is a set of attributes that can identify each tuple uniquely in the given relation. <br />
                    Types of Keys: <br />
                    ● Super Key - A superkey is a set of attributes that can identify each tuple uniquely in the
                    given relation. A super key may consist of any number of attributes. <br />
                    ● Candidate Key - A set of minimal attribute(s) that can identify each tuple uniquely in the
                    given relation is called a candidate key. <br />
                    ● Primary Key - A primary key is a candidate key that the database designer selects while
                    designing the database. Primary Keys are unique and NOT NULL. <br />
                    ● Alternate Key - Candidate keys that are left unimplemented or unused after
                    implementing the primary key are called as alternate keys. <br />
                    ● Foreign Key - An attribute ‘X’ is called as a foreign key to some other attribute ‘Y’ when its
                    values are dependent on the values of attribute ‘Y’. The relation in which attribute ‘Y’ is
                    present is called as the referenced relation. The relation in which attribute ‘X’ is present
                    is called as the referencing relation. <br />
                    ● Composite Key - A primary key composed of multiple attributes and not just a single
                    attribute is called a composite key. <br />
                    ● Unique Key - It is unique for all the records of the table. Once assigned, its value cannot
                    be changed i.e. it is non-updatable. It may have a NULL value.
                </p>
                <span>Functional Dependency:</span>
                <p>In any relation, a functional dependency α → β holds if- Two tuples having same value
                    of attribute α also have same value for attribute β.</p><br />
                <span>Types of Functional Dependency:</span><br />
                <p>● Trivial Functional Dependencies  -
                    o A functional dependency X → Y is said to be trivial if and only if Y ⊆ X. o
                    Thus, if RHS of a functional dependency is a subset of LHS, then it is called a
                    trivial functional dependency. ● Non-Trivial Functional Dependencies -
                    o A functional dependency X → Y is said to be non-trivial if and only if Y ⊄ X. o
                    Thus, if there exists at least one attribute in the RHS of a functional dependency
                    that is not a part of LHS, then it is called a non-trivial functional dependency.</p><br />
                <span>Decomposition of a Relation:</span>
                <p>The process of breaking up or dividing a single relation into two or more sub relations is called
                    the decomposition of a relation.<br />
                    Properties of Decomposition:<br />
                    ● Lossless Decomposition - Lossless decomposition ensures<br />
                    o No information is lost from the original relation during decomposition. o When
                    the sub relations are joined back, the same relation is obtained that was
                    decomposed.<br />
                    ● Dependency Preservation - Dependency preservation ensures<br />
                    o None of the functional dependencies that hold on the original relation are lost. o
                    The sub relations still hold or satisfy the functional dependencies of the original
                    relation.</p><br />
                <span>Types of Decomposition:</span><br />
                <p>● Lossless Join Decomposition:<br />
                    o Consider there is a relation R which is decomposed into sub relations R1, R2, ….,
                    Rn.<br />
                    o This decomposition is called lossless join decomposition when the join of the sub
                    relations results in the same relation R that was decomposed.<br />
                    o For lossless join decomposition, we always have- R1 ⋈ R2 ⋈ R3 ……. ⋈ Rn = R
                    where ⋈ is a natural join operator<br />
                    ● Lossy Join Decomposition:<br />
                    o Consider there is a relation R which is decomposed into sub relations R1, R2, ….,
                    Rn.<br />
                    o This decomposition is called lossy join decomposition when the join of the sub
                    relations does not result in the same relation R that was decomposed.<br />
                    o For lossy join decomposition, we always have- R1 ⋈ R2 ⋈ R3 ……. ⋈ Rn ⊃ R
                    where ⋈ is a natural join operator</p><br />
                <span>Normalization:</span><br />
                <p>In DBMS, database normalization is a process of making the database consistent by- <br />● Reducing the redundancies <br />
                    ● Ensuring the integrity of data through lossless decomposition</p><br />
                <span>Normal Forms:</span><br />
                <p>● First Normal Form (1NF) - A given relation is called in First Normal Form (1NF) if each cell
                    of the table contains only an atomic value i.e. if the attribute of every tuple is either
                    single valued or a null value.<br />
                    ● Second Normal Form (2NF) - A given relation is called in Second Normal Form (2NF) if
                    and only if<br />
                    o Relation already exists in 1NF. o No partial dependency exists in the relation.
                    A → B is called a partial dependency if and only if- A is a subset of some
                    candidate key and B is a non-prime attribute.<br />
                    ● Third Normal Form (3NF) - A given relation is called in Third Normal Form (3NF) if and
                    only if<br />
                    o Relation already exists in 2NF. o No transitive dependency exists for non-prime attributes.
                    A → B is called a transitive dependency if and only if- A is not a super key and B
                    is a non-prime attribute.<br />
                    ● Boyce-Codd Normal Form - A given relation is called in BCNF if and only if
                    o Relation already exists in 3NF. o For each non-trivial functional dependency ‘A → B’, A is a super key of the
                    relation.</p><br />
                <span>Transaction:</span><br />
                <p>Transaction is a single logical unit of work formed by a set of operations.</p><br />
                <span>Operations in Transaction:</span><br />
                <p>● Read Operation - Read(A) instruction will read the value of ‘A’ from the database and
                    will store it in the buffer in main memory.<br />
                    ● Write Operation – Write(A) will write the updated value of ‘A’ from the buffer to the
                    database.</p><br />
                <span>Transaction States:</span><br />
                <p>
                    ● Active State –<br />
                    o This is the first state in the life cycle of a transaction.<br />
                    o A transaction is called in an active state as long as its instructions are getting
                    executed.<br />
                    o All the changes made by the transaction now are stored in the buffer in main
                    memory.<br />
                    ● Partially Committed State - <br />
                    o After the last instruction of the transaction has been executed, it enters into a
                    partially committed state.<br />
                    o After entering this state, the transaction is considered to be partially committed. <br />
                    o It is not considered fully committed because all the changes made by the
                    transaction are still stored in the buffer in main memory. <br />
                    ● Committed State - <br />
                    o After all the changes made by the transaction have been successfully stored into
                    the database, it enters into a committed state.<br />
                    o Now, the transaction is considered to be fully committed. <br />
                    ● Failed State - <br />
                    o When a transaction is getting executed in the active state or partially committed
                    state and some failure occurs due to which it becomes impossible to continue
                    the execution, it enters into a failed state. <br />
                    ● Aborted State - <br />
                    o After the transaction has failed and entered into a failed state, all the changes
                    made by it have to be undone. <br />
                    o To undo the changes made by the transaction, it becomes necessary to roll back
                    the transaction. <br />
                    o After the transaction has rolled back completely, it enters into an aborted state. <br />
                    ● Terminated State - <br />
                    o This is the last state in the life cycle of a transaction. <br />
                    o After entering the committed state or aborted state, the transaction finally
                    enters into a terminated state where its life cycle finally comes to an end. <br />
                </p><br />
                <span>ACID Properties:</span> <br />
                <p>To ensure the consistency of the database, certain properties are followed by all the
                    transactions occurring in the system. These properties are called as ACID Properties of a
                    transaction.<br />
                    ● Atomicity - <br />
                    o This property ensures that either the transaction occurs completely or it does not
                    occur at all.<br />
                    o In other words, it ensures that no transaction occurs partially.<br />
                    ● Consistency - <br />
                    o This property ensures that integrity constraints are maintained.<br />
                    o In other words, it ensures that the database remains consistent before and after
                    the transaction.<br />
                    ● Isolation - <br />
                    o This property ensures that multiple transactions can occur simultaneously
                    without causing any inconsistency. o The resultant state of the system after executing all the transactions is the same
                    as the state that would be achieved if the transactions were executed serially one
                    after the other. <br />
                    ● Durability :- <br />
                    o This property ensures that all the changes made by a transaction after its
                    successful execution are written successfully to the disk.<br />
                    o It also ensures that these changes exist permanently and are never lost even if
                    there occurs a failure of any kind.</p><br />
                <span>Schedules:</span><br />

                <p>The order in which the operations of multiple transactions appear for execution is called as a
                    schedule.<br />
                    ● Serial Schedules - <br />
                    o All the transactions execute serially one after the other.<br /> o When one transaction executes, no other transaction is allowed to execute.<br />
                    o Serial schedules are always- Consistent, Recoverable, Cascadeless and Strict.<br /> ●
                    Non-Serial Schedules - <br />
                    o Multiple transactions execute concurrently. o Operations of all the transactions are inter leaved or mixed with each other. o Non-serial schedules are not always- Consistent, Recoverable, Cascadeless and
                    Strict.
                </p>
                <br />
                <span>Serializability - </span><br />
                <p>● Some non-serial schedules may lead to inconsistency of the database. ● Serializability
                    is a concept that helps to identify which non-serial schedules are correct and will
                    maintain the consistency of the database.<br />
                    ● Serializable Schedules - <br />
                    o If a given non-serial schedule of ‘n’ transactions is equivalent to some serial
                    schedule of ‘n’ transactions, then it is called as a serializable schedule.<br />
                    o Serializable schedules are always- Consistent, Recoverable, Cascadeless and
                    Strict. </p><br />
                <span>Types of Serializability - </span><br />
                <p>
                    ● Conflict Serializability - If a given non-serial schedule can be converted into a serial
                    schedule by swapping its non-conflicting operations, then it is called a conflict
                    serializable schedule.<br />
                    ● View Serializability - If a given schedule is found to be viewed as equivalent to some
                    serial schedule, then it is called a view serializable schedule.<br />
                </p>
                <span>Non-Serializable Schedules - </span><br />
                <p>● A non-serial schedule which is not serializable is called a non-serializable schedule. ● A
                    non-serializable schedule is not guaranteed to produce the same effect as produced by
                    some serial schedule on any consistent database.<br />
                    ● Non-serializable schedules- may or may not be consistent, may or may not be
                    recoverable.<br />
                    ● Irrecoverable Schedules  - <br />
                    If in a schedule,<br />
                    o A transaction performs a dirty read operation from an uncommitted transaction
                    o And commits before the transaction from which it has read the value then such a
                    schedule is known as an Irrecoverable Schedule.
                    ● Recoverable Schedules -
                    If in a schedule,<br />
                    o A transaction performs a dirty read operation from an uncommitted transaction<br />
                    o And its commit operation is delayed till the uncommitted transaction either
                    commits or roll backs<br />
                    then such a schedule is known as a Recoverable Schedule.</p><br />
                <span> Types of Recoverable Schedules - </span> <br />
                <p>
                    ● Cascading Schedule - If in a schedule, failure of one transaction causes several other
                    dependent transactions to rollback or abort, then such a schedule is called as a
                    Cascading Schedule or Cascading Rollback or Cascading Abort.<br />
                    ● Cascadeless Schedule - If in a schedule, a transaction is not allowed to read a data item
                    until the last transaction that has written it is committed or aborted, then such a
                    schedule is called as a Cascadeless Schedule.<br />
                    ● Strict Schedule - If in a schedule, a transaction is neither allowed to read nor write a data
                    item until the last transaction that has written it is committed or aborted, then such a
                    schedule is called as a Strict Schedule.<br />

                </p>
                <span>Relational Algebra: </span><br />
                <p>

                </p>
                <span>File Structures:</span> <br />
                <p>● Primary Index: A primary index is an ordered file, records of fixed length with two fields.
                    First field is the same as the primary key as a data file and the second field is a pointer to
                    the data block, where the key is available. The average number of block accesses using
                    index = log2Bi + 1, where Bi = number of index blocks.<br />
                    ● Clustering Index: Clustering index is created on data file whose records are physically
                    ordered on a non-key field (called Clustering field).<br />
                    ● Secondary Index: Secondary index provides secondary means of accessing a file for
                    which primary access already exists.</p><br />
                <span>B Trees</span> <br />
                <p>
                    At every level , we have Key and Data Pointer and data pointer points to either block or record.
                    Properties of B-Trees:<br />
                    Root of B-tree can have children between 2 and P, where P is Order of tree.<br />
                    Order of tree – Maximum number of children a node can have.<br />
                    Internal node can have children between ⌈ P/2 ⌉ and P<br />
                    Internal node can have keys between ⌈ P/2 ⌉ – 1 and P-1<br />
                </p>
                <span>B+ Trees</span><br />
                <p>
                    In B+ trees, the structure of leaf and non-leaf are different, so their order is. Order of non-leaf
                    will be higher as compared to leaf nodes.<br />
                    Searching time will be less in B+ trees, since it doesn’t have record pointers in non-leaf because
                    of which depth will decrease.<br />
                </p>
            </div>
        </div>
    )
}


export default Dbms