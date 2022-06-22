import React from 'react'
import "./dbms.css";


function Cn() {
  return (
    <div className="container container-custom" style={{ textAlign: 'center', marginTop: "1.5rem" }}>
      <h3>Cn Notes 🚀</h3>
      <div className="info" style={{ textAlign: 'left' }}>
        <p><span> Network:</span>
          A network is a set of devices that are connectedwith a physical media link. Ina network, two or more nodes are connected by a physicallink or two or more networksare connected by one or more nodes. A network is acollection of devices connected toeach other to allow the sharing of data
        </p>

        <p><span>Network Topology:</span>
          Network topology specifies thelayout of a computer network. Itshows how devices and cables are connected to eachother.
        </p>


        <p><span>Types of Network Topology:</span><br />
          Star:<br />
          ●Star topology is a network topology in which all thenodes are connectedto a single device known as a central device.<br />
          ●Star topology requires more cable compared to othertopologies.Therefore, it is more robust as a failure in one cablewill only disconnect aspecific computer connected to this cable.<br />
          ●If the central device is damaged, then the whole networkfails.●Star topology is very easy to install, manage andtroubleshoot. It iscommonly used in office and home networks.<br /><br />

          Ring:<br />
          1.Ring topology is a network topology in which nodesare exactly connected to twoor more nodes and thus, forming a single continuouspath for the transmission.<br />
          2.It does not need any central server to control theconnectivity among the nodes.<br />
          3.If the single node is damaged, then the whole networkfails.<br />
          4.Ring topology is very rarely used as it is expensive,difficult to install andmanage.<br />
          5.Examples of Ring topology are SONET network, SDH network,etc.<br /><br />

          Bus :<br />
          1.Bus topology is a network topology in which all thenodes are connected to asingle cable known as a central cable or bus.<br />
          2.It acts as a shared communication medium, i.e., if any device wants to send thedata to other devices, then it will send the dataover the bus which in turn sendsthe data to all the attached devices.<br />
          3.Bus topology is useful for a small number of devices.<br />
          4.As if the bus is damaged then the whole network fails.<br /><br />

          Mesh:<br />
          1.Mesh topology is a network topology in which all thenodes are individuallyconnected to other nodes.<br />
          2.It does not need any central switch or hub to controlthe connectivity among thenodes.<br />
          3.Mesh topology is categorized into two parts:Fullyconnected mesh topology:In this topology, all the nodes are connected to eachother.Partially connectedmesh topology: In this topology, all the nodes are not connected to each other.<br />
          4.It is robust as a failure in one cable will only disconnectthe specified computerconnected to this cable.<br />
          5.Mesh topology is rarely used as installation and configurationare difficult whenconnectivity gets more.<br />
          6.Cabling cost is high as it requires bulk wiring.<br /><br />

          Tree:<br />
          1.Tree topology is a combination of star and bus topology.It is also known as theexpanded star topology.<br />
          2.In tree topology, all the star networks are connectedto a single bus.<br />
          3.Ethernet protocol is used in this topology.<br />
          4.In this, the whole network is divided into segmentsknown as star networks whichcan be easily maintained. If one segment is damaged,there is no effect on othersegments.<br />
          5.Tree topology depends on the "main bus," and if itbreaks, then the wholenetwork gets damaged<br /><br />

          Hybrid:<br />
          1.A hybrid topology is a combination of different topologiesto form a resultingtopology.<br />
          2.If star topology is connected with another star topology,then it remains a startopology. If star topology is connected with differenttopology, then it becomes aHybrid topology.<br />
          3.It provides flexibility as it can be implemented ina different network environment.<br />
        </p>

        <p><span>Different Types of Networks : (Imp)</span>
          - Networks can be divided on the basis of area of
          distribution. For example:<br />
          ● PAN (Personal Area Network): Its range limit is up to 10 meters. It is created for
          personal use. Generally, personal devices are connected to this network. For example
          computers, telephones, fax, printers, etc.<br />
          ● LAN (Local Area Network): It is used for a small geographical location like office,
          hospital, school, etc.<br />
          ● HAN (House Area Network): It is actually a LAN that is used within a house and used to
          connect homely devices like personal computers, phones, printers, etc.<br />
          ● CAN (Campus Area Network): It is a connection of devices within a campus area which
          links to other departments of the organization within the same campus.<br />
          ● MAN (Metropolitan Area Network): It is used to connect the devices which span to
          large cities like metropolitan cities over a wide geographical area.<br />
          ● WAN (Wide Area Network): It is used over a wide geographical location that may range
          to connect cities and countries.<br />
          ● GAN (Global Area Network): It uses satellites to connect devices over the global area</p>

        <p><span> VPN (Virtual Private Network) : </span>
          VPN or the Virtual Private Network is a private WAN<br />
          (Wide Area Network) built on the internet. It allows the creation of a secured tunnel
          (protected network) between different networks using the internet (public network). By
          using the VPN, a client can connect to the organization’s network remotely.<br /><br />
          ● Advantages of VPN :<br />
          1. VPN is used to connect offices in different geographical locations remotely and is
          cheaper when compared to WAN connections.<br />
          2. VPN is used for secure transactions and confidential data transfer between
          multiple offices located in different geographical locations.<br />
          3. VPN keeps an organization’s information secured against any potential threats or
          intrusions by using virtualization.<br />
          4. VPN encrypts the internet traffic and disguises the online identity.<br /><br />
          <span>Types of VPN :</span><br />
          ● Access VPN: Access VPN is used to provide connectivity to remote mobile users and
          telecommuters. It serves as an alternative to dial-up connections or ISDN (Integrated
          Services Digital Network) connections. It is a low-cost solution and provides a wide
          range of connectivity.<br />
          ● Site-to-Site VPN: A Site-to-Site or Router-to-Router VPN is commonly used in large
          companies having branches in different locations to connect the network of one office to
          another in different locations. There are 2 sub-categories as mentioned below:<br />
          ● Intranet VPN: Intranet VPN is useful for connecting remote offices in different
          geographical locations using shared infrastructure (internet connectivity and servers)
          with the same accessibility policies as a private WAN (wide area network).<br />
          ● Extranet VPN: Extranet VPN uses shared infrastructure over an intranet, suppliers,
          customers, partners, and other entities and connects them using dedicated connections.
        </p>

        <p><span> IPv4 Address :</span>
          An IP address is a 32-bit dynamic address of a node in the network. An
          IPv4 address has 4 octets of 8-bit each with each number with a value up to 255. IPv4
          classes are differentiated based on the number of hosts it supports on the network.
          There are five types of IPv4 classes and are based on the first octet of IP addresses
          which are classified as Class A, B, C, D, or E.
          <img src="https://i0.wp.com/ytimg.googleusercontent.com/vi/qWvnkDkgXH8/maxresdefault.jpg?resize=160,120" alt="classes" style={{ width: '100%' }} />
        </p>


        <p><span> OSI (Open System Interconnections) (Imp) :</span>
          It is a network architecture model based
          on the ISO standards. It is called the OSI model as it deals with connecting the systems
          that are open for communication with other systems. The OSI model has seven layers.<br />
          The principles used to arrive at the seven layers can be summarized briefly as below:<br />
          1. Create a new layer if a different abstraction is needed.<br />
          2. Each layer should have a well-defined function.<br />
          3. The function of each layer is chosen based on internationally standardized
          protocols.<br /><br />
          <span>● Seven Layers :</span><br /><br />
          1. Physical Layer<br />
          ● It is the lowest layer of the OSI reference model.<br />
          ● It is used for the transmission of an unstructured raw bit stream over a physical
          medium.<br />
          ● Physical layer transmits the data either in the form of electrical/optical or
          mechanical form.<br />
          ● The physical layer is mainly used for the physical connection between the
          devices, and such physical connection can be made by using twisted-pair cable,
          fibre-optic or wireless transmission media.<br /><br />
          2. DataLink Layer<br />
          ● It is used for transferring the data from one node to another node.<br />
          ● It receives the data from the network layer and converts the data into data frames
          and then attaches the physical address to these frames which are sent to the
          physical layer.<br />
          ● It enables the error-free transfer of data from one node to another node.<br /><br />
          Functions of Data-link layer:<br />
          ● Frame synchronization: Data-link layer converts the data into frames, and it ensures
          that the destination must recognize the starting and ending of each frame.<br />
          ● Flow control: Data-link layer controls the data flow within the network.<br />
          ● Error control: It detects and corrects the error occurred during the transmission from
          source to destination.<br />
          ● Addressing: Data-link layers attach the physical address with the data frames so that
          the individual machines can be easily identified.<br />
          ● Link management: Data-link layer manages the initiation, maintenance and termination
          of the link between the source and destination for the effective exchange of data.<br /><br />

          3. Network Layer<br />
          ● Network layer converts the logical address into the physical address.<br />
          ● The routing concept means it determines the best route for the packet to travel from
          source to the destination.<br /><br />
          Functions of network layer :<br />
          ● Routing: The network layer determines the best route from source to destination. This
          function is known as routing.<br />
          ● Logical addressing: The network layer defines the addressing scheme to identify each
          device uniquely.<br />
          ● Packetizing: The network layer receives the data from the upper layer and converts the
          data into packets. This process is known as packetizing.<br />
          ● Internetworking: The network layer provides the logical connection between the
          different types of networks for forming a bigger network.<br />
          ● Fragmentation: It is a process of dividing the packets into fragments..<br /><br />
          4. Transport Layer<br />
          ● It delivers the message through the network and provides error checking so that no error
          occurs during the transfer of data.<br />
          ● It provides two kinds of services:<br />
          ○ Connection-oriented transmission: In this transmission, the receiver sends the
          acknowledgement to the sender after the packet has been received.<br />
          ○ Connectionless transmission: In this transmission, the receiver does not send
          the acknowledgement to the sender.<br /><br />
          5. Session Layer<br />
          ● The main responsibility of the session layer is beginning, maintaining and ending the
          communication between the devices.<br />
          ● Session layer also reports the error coming from the upper layers.<br />
          ● Session layer establishes and maintains the session between the two users.<br /><br />
          6. Presentation Layer<br />
          ● The presentation layer is also known as a Translation layer as it translates the data from
          one format to another format.<br />
          ● At the sender side, this layer translates the data format used by the application layer to
          the common format and at the receiver side, this layer translates the common format into
          a format used by the application layer.<br /><br />
          Functions of presentation layer:<br />
          ○ Character code translation<br />
          ○ Data conversion<br />
          ○ Data compression<br />
          ○ Data encryption<br /><br />
          7. Application Layer<br />
          ● Application layer enables the user to access the network.<br />
          ● It is the topmost layer of the OSI reference model.<br />
          ● Application layer protocols are file transfer protocol, simple mail transfer protocol,
          domain name system, etc.<br />
          ● The most widely used application protocol is HTTP(Hypertext transfer protocol ). A user
          sends the request for the web page using HTTP.</p>

        <p><span>TCP/IP Reference Model :</span>
          It is a compressed version of the OSI model with only 4
          layers. It was developed by the US Department of Defence (DoD) in the 1860s. The
          name of this model is based on 2 standard protocols used i.e. TCP (Transmission
          Control Protocol) and IP (Internet Protocol). <br />
          1. Link : Decides which links such as serial lines or classic Ethernet must be used
          to meet the needs of the connectionless internet layer. Ex - Sonet, Ethernet<br />
          2. Internet : The internet layer is the most important layer which holds the whole
          architecture together. It delivers the IP packets where they are supposed to be
          delivered. Ex - IP, ICMP.<br />
          3. Transport : Its functionality is almost the same as the OSI transport layer. It
          enables peer entities on the network to carry on a conversation. Ex - TCP, UDP
          (User Datagram Protocol)<br />
          4. Application : It contains all the higher-level protocols. Ex - HTTP, SMTP, RTP,
          DNS</p>


        <p><span> HTTP and HTTPS :</span>
          HTTP is the HyperText Transfer Protocol which defines the set of rules and standards
          on how the information can be transmitted on the World Wide Web (WWW). It helps the
          web browsers and web servers for communication. It is a ‘stateless protocol’ where each
          command is independent with respect to the previous command. HTTP is an
          application layer protocol built upon the TCP. It uses port 80 by default.
          HTTPS is the HyperText Transfer Protocol Secure or Secure HTTP. It is an advanced
          and secured version of HTTP. On top of HTTP, SSL/TLS protocol is used to provide
          security. It enables secure transactions by encrypting the communication and also
          helps identify network servers securely. It uses port 443 by default</p>

        <p><span>DNS (Imp) :</span>
          1. DNS is an acronym that stands for Domain Name System.DNS was introduced
          by Paul Mockapetris and Jon Postel in 1983.<br />
          2. It is a naming system for all the resources over the internet which includes
          physical nodes and applications. It is used to locate resources easily over a
          network.<br />
          3. DNS is an internet which maps the domain names to their associated IP
          addresses.<br />
          4. Without DNS, users must know the IP address of the web page that you wanted
          to access.<br /><br />
          <span>● Working of DNS (Imp):</span><br />
          If you want to visit the website of "shaurya", then the user will
          type "https://www.shaurya.com" into the address bar of the web browser. Once the
          domain name is entered, then the domain name system will translate the domain name
          into the IP address which can be easily interpreted by the computer. Using the IP
          address, the computer can locate the web page requested by the user.<br /><br />
          <span>● DNS Forwarder :</span><br />
          A forwarder is used with a DNS server when it receives DNS queries
          that cannot be resolved quickly. So it forwards those requests to external DNS servers
          for resolution. A DNS server which is configured as a forwarder will behave differently
          than the DNS server which is not configured as a forwarder.</p>

        <p><span> SMTP Protocol : </span>
          SMTP is the Simple Mail Transfer Protocol. SMTP sets the rule for
          communication between servers. This set of rules helps the software to transmit emails
          over the internet. It supports both End-to-End and Store-and-Forward methods. It is in
          always-listening mode on port 25.</p>


        <p><span>    Difference Between TCP (Transmission Control Protocol) and UDP (User Datagram
          Protocol):</span><br />
          1. TCP is a connection-oriented protocol, whereas UDP is a connectionless
          protocol. A key difference between TCP and UDP is speed, as TCP is
          comparatively slower than UDP. Overall, UDP is a much faster, simpler, and
          efficient protocol, however, retransmission of lost data packets is only possible
          with TCP<br />
          2. TCP provides extensive error checking mechanisms. It is because it provides
          flow control and acknowledgment of data. UDP has only the basic error
          checking mechanism using checksums.</p>


        <p><span>   Important Protocols</span>
          A protocol is a set of rules which is used to govern all the aspects of information
          communication.The main elements of a protocol are:<br />
          ● Syntax: It specifies the structure or format of the data. It also specifies the order in which
          they are presented.<br />
          ● Semantics: It specifies the meaning of each section of bits.<br />
          ● Timing: Timing specifies two characteristics: When data should be sent and how fast it
          can be sent.<br /><br />
          ● DHCP: DHCP is the Dynamic Host Configuration Protocol. It is an application layer
          protocol used to auto-configure devices on IP networks enabling them to use the TCP
          and UDP-based protocols. The DHCP servers auto-assign the IPs and other network
          configurations to the devices individually which enables them to communicate over the
          IP network. It helps to get the subnet mask, IP address and helps to resolve the DNS. It
          uses port 67 by default.<br /><br />
          ● FTP : FTP is a File Transfer Protocol. It is an application layer protocol used to transfer
          files and data reliably and efficiently between hosts. It can also be used to download files
          from remote servers to your computer. It uses port 27 by default.<br /><br />
          ● ICMP : ICMP is the Internet Control Message Protocol. It is a network layer protocol
          used for error handling. It is mainly used by network devices like routers for diagnosing
          the network connection issues and crucial for error reporting and testing if the data is
          reaching the preferred destination in time. It uses port 7 by default.<br /><br />
          ● ARP : ARP is Address Resolution Protocol. It is a network-level protocol used to
          convert the logical address i.e. IP address to the device's physical address i.e. MAC
          address. It can also be used to get the MAC address of devices when they are trying to
          communicate over the local network.<br /><br />
          ● RIP :RIP stands for Routing Information Protocol. It is accessed by the routers to send
          data from one network to another. RIP is a dynamic protocol which is used to find the
          best route from source to the destination over a network by using the hop count
          algorithm. Routers use this protocol to exchange the network topology information. This
          protocol can be used by small or medium-sized networks.
        </p>


        <p><span>  MAC address and IP address (Imp) :</span><br />
          1. Both MAC (Media Access Control) Address and IP Address are used to uniquely
          define a device on the internet. NIC Card’s Manufacturer provides the MAC Address,
          on the other hand Internet Service Provider provides IP Address.<br />
          2. The main difference between MAC and IP address is that MAC Address is used to
          ensure the physical address of a computer. It uniquely identifies the devices on a
          network. While IP addresses are used to uniquely identify the connection of a network
          with that device taking part in a network.</p>

        <p><span> Ipconfig and Ifconfig :</span>
          1. Ipconfig : Internet Protocol Configuration, It is a command used in Microsoft operating
          systems to view and configure network interfaces<br/>
          2. Ifconfig : Interface Configuration, It is a command used in MAC, Linux, UNIX operating
          systems to view and configure network interfaces<br/>
          ● Firewall : The firewall is a network security system that is used to monitor the incoming
          and outgoing traffic and blocks the same based on the firewall security policies. It acts as
          a wall between the internet (public network) and the networking devices (a private
          network). It is either a hardware device, software program, or a combination of both. It
          adds a layer of security to the network.</p>


          <p>
            <span></span>
          </p>
      </div>
    </div>
  )
}

export default Cn