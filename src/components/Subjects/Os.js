import React from 'react'

function Os() {
    return (
        <div className="container container-custom" style={{ textAlign: 'center', marginTop: "1.5rem" }}>
            <h3>OS Notes 🚀</h3>
            <div className="info" style={{ textAlign: 'left' }}>
                <p><span>OS:</span><br />
                    An Operating System can be defined as an interface between user and hardware. It
                    is responsible for the execution of all the processes, Resource Allocation, CPU
                    management, File Management and many other tasks. The purpose of an operating
                    system is to provide an environment in which a user can execute programs in a
                    convenient and efficient manner
                </p><br />
                <span>Types of OS:-</span><br />
                <p>1. Batch OS – A set of similar jobs are stored in the main memory for execution. A job gets assigned to the CPU, only when the execution of the previous job completes.<br />
                    2. Multiprogramming OS – The main memory consists of jobs waiting for CPU time. The OS selects one of the processes and assigns it to the CPU. Whenever the executing process needs to wait for any other operation (like I/O), the OS selects another process from the job queue and assigns it to the CPU. This way, the CPU is never kept idle and the user gets the flavor of getting multiple tasks done at once. <br />
                    3. Multitasking OS – Multitasking OS combines the benefits of Multiprogramming OS and CPU scheduling to perform quick switches between jobs. The switch is so quick that the user can interact with each program as it runs.<br />
                    4. Time Sharing OS – Time-sharing systems require interaction with the user to instruct the OS to perform various tasks. The OS responds with an output. The instructions are usually given through an input device like the keyboard.<br />
                    5. Real Time OS – Real-Time OS are usually built for dedicated systems to accomplish a specific set of tasks within deadlines.</p><br />
                <span>Function of the Operating System</span> <br />
                <p>
                    ● Memory management<br />
                    ● Processor management <br />
                    ● Device management <br />
                    ● File management <br />
                    ● Security <br />
                    ● Job accounting <br />
                    ● Control over system performance <br />
                    ● Error detection <br />
                    ● Communicate between user and software <br />
                    ● Communication between software and hardware. <br />
                </p>
                <span>Kernel</span> <br />
                <p>Kernel is the core of every operating system. It connects applications to the actual processing of data. It also manages all communications between software and hardware components to ensure usability and reliability.<br />
                    Though there are many types of kernels, only two of them are considered in use. ● Monolithic Kernel ● MicroKernel Monolithic Kernel: In this type of Kernel, all the User services and kernel services reside in the same memory space. The old operating system would use this type of Kernel. Some examples are Linux, Windows 95, 98, Unix, etc. <br />
                    MicroKernel: This type of Kernel is small in size, and all the User and Kernel services reside in the different memory addresses. Operating systems like Mac OS X, windows use this type of Kernel.  </p><br />
                <span>Booting the system and Bootstrap program in Operating system</span><br />
                <p>The procedure of starting a computer by loading the kernel is known as booting the system. When a user first turn on or booted the computer, it needs some initial program to run. This initial program is known as Bootstrap Program. It is stored in read-only memory (ROM) or electrically erasable programmable read-only memory (EEPROM). Bootstrap program locates the kernel and loads it into main memory and starts its execution.</p><br />
                <span>Daemon</span><br />
                <p>Disk and execution monitor, is a process that runs in the background without user’s interaction. They usually start at the booting time and terminate when the system is shut down.compaction<br /></p>
                <span>Pipe</span> <br />
                <p>- A traditional pipe is unnamed and can be used only for the communication of related process. If unrelated processes are required to communicate - named pipes are required.<br />
                    - It is a pipe whose access point is a file available on the file system. When this file is opened for reading, a process is granted access to the reading end of the pipe. Similarly, when the file is opened for writing, the process is granted access to writing end of the pipe. <br />
                    - A named pipe is also referred to as FIFO or named FIFO.</p><br />
                <span>User Mode And Kernel Mode</span> <br />
                <p>User Mode<br />
                    The system is in user mode when the operating system is running a user application such as handling a text editor. The transition from user mode to kernel mode occurs when the application requests the help of the operating system or an interrupt or a system call occurs. The mode bit is set to 1 in the user mode. It is changed from 1 to 0 when switching from user mode to kernel mode.<br />
                    Kernel Mode-<br />
                    The system starts in kernel mode when it boots and after the operating system is loaded, it executes applications in user mode. There are some privileged instructions that can only be executed in kernel mode. These are interrupt instructions, input output management etc. If the privileged instructions are executed in user mode, it is illegal and a trap is generated. The mode bit is set to 0 in the kernel mode. It is changed from 0 to 1 when switching from kernel mode to user mode.</p><br />
                <span>Multitasking</span>
                <p>As the name itself suggests, multitasking refers to execution of multiple tasks (say processes, programs, threads etc.) at a time. In the modern operating systems, we are able to play MP3 music, edit documents in Microsoft Word, surf Google Chrome all simultaneously, this is accomplished by means of multi tasking.<br />
                    Multitasking is a logical extension of multiprogramming. The major way in which multitasking differs from multi programming is that multi programming works solely on the concept of context switching whereas multitasking is based on time sharing alongside the concept of context switching.<br /></p>
                <span>Multiprogramming</span><br />
                <p>In a modern computing system, there are usually several concurrent application processes which want to execute. Now it is the responsibility of the Operating System to manage all the processes effectively and efficiently.<br />
                    One of the most important aspects of an Operating System is to multi program.<br />
                    In a computer system, there are multiple processes waiting to be executed, i.e. they are waiting when the CPU will be allocated to them and they begin their execution. These processes are also known as jobs. Now the main memory is too small to accommodate all of these processes or jobs into it. Thus, these processes are initially kept in an area called job pool. This job pool consists of all those processes awaiting allocation of main memory and CPU. <br />
                    CPU selects one job out of all these waiting jobs, brings it from the job pool to main memory and starts executing it. The processor executes one job until it is interrupted by some external factor or it goes for an I/O task.<br /></p>
                <span>Multithreading</span><br />
                <p>Multi threading is the ability of a process to manage its use by more than one user at a time and to manage multiple requests by the same user without having to have multiple copies of the program.</p><br />
                <span>Multiprocessing<br /></span>
                <p>Multiprocessing is the use of two or more CPUs (processors) within a single Computer system. The term also refers to the ability of a system to support more than one processor within a single computer system. Now since there are multiple processors available, multiple processes can be executed at a time. These multi processors share the computer bus, sometimes the clock, memory and peripheral devices also.</p><br />
                <span>Graceful Degradation</span><br />
                <p>In multiprocessor systems, failure of one processor will not halt the system, but only slow it down by sharing the work of the failure system with other systems. This ability to continue providing service is proportional to the surviving hardware is called graceful degradation.<br /></p>
                <span>MultiCore Processor</span><br />
                <p>Hardware has been to place multiple processor cores on the same physical chip, resulting in a multicore processor. Each core maintains its architectural state and thus appears to the operating system to be a separate physical processor.</p><br />
                <span>Zombie Process</span> <br />
                <p>A zombie process is a process that has completed and in the terminated state but has its entry in the process table. It shows that the resources are held by the process and are not free.<br /></p>
                <span>Sockets - <br /></span>
                <p>- A socket is defined as endpoint for communication, a pair of sockets is used by the pair of processes. <br />
                    - It is made of IP address chained with a port number. <br />
                    - They use the client server architecture. <br />
                    - Server waits for incoming client requests by listening to specified port. <br />
                    - On reception of request, server accepts connection from client socket to complete the connection.<br /></p>
                <span>Reentrancy<br /></span>
                <p>It is a useful, memory-saving technique for multiprogrammed timesharing systems. A Reentrant Procedure is one in which multiple users can share a single copy of a program during the same period. Reentrancy has 2 key aspects: The program code cannot modify itself, and the local data for each user process must be stored separately. Thus, the permanent part is the code, and the temporary part is the pointer back to the calling program and local variables used by that program. Each execution instance is called activation. It executes the code in the permanent part, but has its own copy of local variables/parameters. The temporary part associated with each activation is the activation record. Generally, the activation record is kept on the stack.<br /></p>
                <span>Process<br /></span>
                <p>A process is an instance of a program in execution. For example a Web Browser is a process, a shell (or command prompt) is a process. <br />
                    The operating system is responsible for managing all the processes that are running on a computer and allocated each process a certain amount of time to use the processor. In addition, the operating system also allocates various other resources that processes will need such as computer memory or disks. To keep track of the state of all the processes, the operating system maintains a table known as the process table. Inside this table, every process is listed along with the resources the processes are using and the current state of the process.</p><br />
                <span>Process Control Block (PCB)</span><br />
                <p>Each process is represented in the operating system by a process control block alsocalled a task control block. It contains many pieces of information associated witha specific process.It simply acts as a repository for any information that may vary from process to process.It contains the following information: Process state Program counter <br />
                    CPU registers <br />
                    CPU-scheduling information <br />
                    Memory-management information <br />
                    Accounting information <br />
                    I/O status information<br /></p>
                <span>Starving And Aging</span><br />
                <p>Starving <br />
                    Starvation is a resource management problem where a process is denied of resource or service for a long time or has been repeatedly denied services.<br />
                    Aging- <br />
                    This is a solution to starvation which involves gradually increasing the priority of processes that wait in the system for a long time.<br />
                    The aging factor must increase the requests priority as time passes and must ensure that a request will eventually be the highest priority request (after it has waited long enough) and gets the chance to execute.<br /></p>
                <span>Thread</span><br />
                <p>A thread is a single sequence stream within a process. Because threads have some of the properties of processes, they are sometimes called lightweight processes. Threads are a popular way to improve application through parallelism. For example, in a browser, multiple tabs can be different threads. MS word uses multiple threads, one thread to format the text, other thread to process inputs, etc. A thread has its own program counter (PC), a register set, and a stack space. Threads are not independent of one other like processes as a result threads share with other threads their code section, data section and OS resources like open files and signals<br /></p>
                <span>Different Scheduling Algorithms<br /></span>
                <p>1. First Come First Serve (FCFS) : Simplest scheduling algorithm that schedules according to arrival times of processes.
                    2. Shortest Job First (SJF): Process which have the shortest burst time are scheduled first. <br />
                    3. Shortest Remaining Time First (SRTF): It is a preemptive mode of SJF algorithm in which jobs are scheduled according to the shortest remaining time. <br />
                    4. Round Robin (RR) Scheduling: Each process is assigned a fixed time, in a cyclic way. <br />
                    5. Priority Based scheduling (Non Preemptive): In this scheduling, processes are scheduled according to their priorities, i.e., the highest priority process is scheduled first. If priorities of two processes match, then scheduling is according to the arrival time. <br />
                    6. Highest Response Ratio Next (HRRN): In this scheduling, processes with the highest response ratio is scheduled. This algorithm avoids starvation. Response Ratio = (Waiting Time + Burst time) / Burst time <br />
                    7. Multilevel Queue Scheduling (MLQ): According to the priority of process, processes are placed in the different queues. Generally high priority processes <br />
                    are placed in the top level queue. Only after completion of processes from the top level queue, lower level queued processes are scheduled. <br />
                    8. Multilevel Feedback Queue (MLFQ) Scheduling: It allows the process to move in between queues. The idea is to separate processes according to the characteristics of their CPU bursts. If a process uses too much CPU time, it is moved to a lower-priority queue.</p><br />
                <span>System Calls</span><br />
                <p>System calls provide the interface between a process and the Operating system. System Calls are also called Monitor call or Operating-system function call. When a system call is executed, it is treated as by the hardware as software interrupt. Control passes through the interrupt vector toa service routine in the operating system, and the mode bit is set to monitor mode.<br /></p>
                <span>Spooling<br /></span>
                <p>Spooling means Simultaneous Peripheral Operations OnLine. It is a high-speed device like a disk is interposed between a running program and a low–speed device involved with the program in input/output. It dissociates a running program from the slow operation of devices like printers<br /></p>
                <span>Possible threads a thread can have:- <br /></span>
                <p>1. Ready <br />
                    2. Standby <br />
                    3. Running <br />
                    4. Waiting <br />
                    5. Transition <br />
                    6. Terminated</p><br />
                <span>Process Swapping
                </span><br />
                <p>When the OS at the explicit request of another process creates a process, this action is called process spawning.<br /></p>
                <span>Dispatcher<br /></span>
                <p>The dispatcher is the module that gives control of the CPU to the process selected by the short-term scheduler. This function involves: <br />
                    ● Switching context <br />
                    ● Switching to user mode <br />
                    ● Jumping to the proper location into the user program to restart that program.<br />
                    When a process is in its critical section, any other process that tries to enter its critical section must loop continuously in the entry code. This is called as busy waiting and this type of semaphore is also called a spinlock, because the process while waiting for the lock<br /></p>
                <span>DeadLock</span><br />
                <p>Deadlock is a situation when two or more processes wait for each other to finish and none of them ever finish. Consider an example when two trains are coming toward each other on same track and there is only one track, none of the trains can move once they are in front of each other. Similar situation occurs in operating systems when there are two or more processes hold some resources and wait for resources held by other(s). <br />
                    There are three ways to handle deadlock <br />
                    1. Deadlock prevention or avoidance: The idea is to not let the system into deadlock state. <br />
                    2. Deadlock detection and recovery: Let deadlock occur, then do preemption to handle it once occurred. <br />
                    3. Ignore the problem all together: If deadlock is very rare, then let it happen and reboot the system. This is the approach that both Windows and UNIX take.<br /></p>
                <span>Virtual Management<br /></span>
                <p>Thrashing is a situation when the performance of a computer degrades or collapses. Thrashing occurs when a system spends more time processing page faults than executing transactions. While processing page faults is necessary to in order to appreciate the benefits of virtual memory, thrashing has a negative affect on the system. As the page fault rate increases, more transactions need processing from the paging device. The queue at the paging device increases, resulting in increased service time for a page fault<br /></p>
                <span>Virtual Memory:- <br /></span>
                <p>Virtual memory creates an illusion that each user has one or more contiguous address spaces, each beginning at address zero. The sizes of such virtual address spaces is generally very high. The idea of virtual memory is to use disk space to extend the RAM. Running processes don’t need to care whether the memory is from RAM or disk. The illusion of such a large amount of memory is created by subdividing the virtual memory into smaller pieces, which can be loaded into physical memory whenever they are needed by a process.<br /></p>
                <span>Pure Demand paging <br /></span>
                <p>When starting execution of a process with no pages in memory, the operating system sets the instruction pointer to the first instruction of the process, which is on a non-memory resident page, the process immediately faults for the page.After this page is brought into memory, the process continues to execute, faulting as necessary until every page that it needs is in memory.At that point, it can execute with no more faults.This schema is pure demand paging.<br /></p>

            </div>
        </div>
    )
}

export default Os