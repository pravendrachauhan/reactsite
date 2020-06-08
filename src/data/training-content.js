const articles = [
    {
        name: 'selenium-online-training',
        title: 'Selenium Course Syllabus',
        duration: '20 hours',
        info: `Selenium is a collection of open source APIs which are used to automate the testing of a web application.
        Selenium tool is used to automate web application testing to verify that it works as expected. 
        It supports many browsers such as Firefox, Chrome, IE, and Safari. However, 
        using Selenium, we can automate testing for web applications only. 
        It does not qualify for window-based applications. 
        It also supports different programming languages such as C#, Java, Perl, PHP and Ruby for writing test scripts. 
        Selenium Webdriver is platform-independent since the same code can be used on different Operating Systems`,
        content: [
            `SubHeading: Introduction to Automation`,
            `What is Automation Testing?`,
            `Advantages & Limitations of Automation Testing`,
            `Automation Criteria (Automate or Not)`,
            `Web Applications and Test Automation for Web Applications`,
            `SubHeading: Introduction to Selenium 3 & 4 and WebDriver`,
            `Introducing Selenium`,
            `Selenium IDE`,
            `Selenium RC`,
            `Selenium Web Driver`,
            `Selenium Grid`,
            `Supported Browsers`,
            'SubHeading: JAVA, Eclipse IDE and TestNG',
            `Installation of Eclipse (for Selenium Programming in JAVA)`,
            `Usage of Eclipse`,
            `Sample JAVA Program to Get Hands on Eclipse`,
            `Running & Debugging JAVA Programs`,
            `TestNG Basics`,
            `TestNG Usage with Selenium`,
            `TestNG on JUnit`,
            `SubHeading: Selenium IDE`,
            `No one interested, need to skip`,
            `SubHeading: Selenium WebDriver and Selenium RC`,
            `How Selenium Server Works`,
            `Selenium Configuration with Eclipse`,
            `GUI Locators (By ID, By Name, By Link etc)`,
            `X-PATH and Different Techniques`,
            `X-Path Absolute, Relative, Attributes`,
            `Selenium WebDriver`,
            `Writing WebDriver scripts`,
            `Hands on WebDriver Commands`,
            `Running Tests on Internet Explorer, Firefox & Google Chrome`,
            `Reporting & Verifying Results`,
            `Debugging Selenium Tests`,
            `SubHeading: Automation Framework Development & Usage`,
            `Creation of Framework`,
            `Usage of Framework`,
            `Sample Project Implementation using the Framework`,
            `Framework Advantages (Keyword Driven, Maintainability, Reusability)`,
            `Data Driving in Selenium with Excel files (Data Driven Framework)`,
            `SubHeading: Selenium Grid`,
            `Selenium Grid Overview`,
            `Setting up Selenium Grid`,
            `Grid as Collection of Selenium Server nodes`,
            `Running tests using Selenium Grid`
        ]
    }, {
        name: 'appium-online-training',
        title: 'Appium Course Syllabus',
        duration: '20 hours',
        info: `
        Appium is an open-source tool for automating native, 
        mobile web, and hybrid applications on iOS and Android platforms. 
        Native apps are those written using the iOS or Android SDKs. 
        Mobile web apps are web apps accessed using a mobile browser Hybrid apps have a 
        wrapper around a "webview" a native control that enables interaction with web content. 
        Projects like Phonegap, make it easy to build apps using web technologies that 
        are then bundled into a native wrapper, creating a hybrid app. `,
        content: [
            `SubHeading: Automation Testing Introduction, Environment Setup and Tools`,
            `Introduction to Testing`,
            `Introduction to Automation Testing`,
            `Types of Automation Tools: Functional, Performance etc`,
            `SubHeading: We will also cover any programming language basics for appium`,
            `Contact us to learn any programming language basics`,
            'SubHeading: Introduction to Appium & Mobile automation Testing',
            `Introduction to Mobile automation testing`,
            `Appium APIs`,
            `Automation for IOS and Android devices`,
            `Running the scripts on Emulators`,
            `Running the scripts on Real devices`,
            `Various tools available for Mobile automation testing`,
            `Understanding the API Levels and Appium Concepts`,
            `Client/Server Architecture, Session, Desired Capabilities, Appium Server and Appium Clients`,
            `SubHeading: Installing JDK, Maven and Android SDK`,
            `Everone aware about installation`,
            `If you need help contact us`,
            `Basic installation for Appium on Windows`,
            `Basic installation for Appium on Mac`,
            `SubHeading: Android ADB commands`,
            `ADB commands`,
            `Starting the Appium server programmatically`,
            `SubHeading: UI Automator Viewer`,
            `Opening UIAutomator Viewer through SDK tools kit`,
            `Understanding different locator strategies`,
            `Taking the Device screenshot`,
            `Device screenshot with Compressed hierarchy`,
            `Understanding the different locator tags`,
            `SubHeading: Appium Inspector`,
            `What is Appium Inspector?`,
            `How and when to run it?`,
            `Record and Play using Appium Inspector`,
            `Locating elements with the help of Appium Inspector`,
            `Inspector will only run with active session`,
            `SubHeading: Object Locators and Techniques`,
            `Locating Elements on the App`,
            `What all can be locatable`,
            `Locating elements within elements`,
            `Locating multiple elements`,
            `Find Element By Android UIAutomator`,
            `Exploring UIAutomator API`,
            `Finding Elements by ClassName`,
            `Finding Elements by ids`,
            `Finding Elements by Xpaths`,
            `Using different functions inside UIAutomator class`,
            `Exercises`,
            `SubHeading: Testing Android Native, Hybrid & Web Apps on Windows`,
            `Native App Test – Making a call with Internal Dialer Application`,
            `Native App Test – Adding a new contact to Phonebook`,
            `Native App Test – Sending SMS from a real device`,
            `Native App Test – Automating a standard App`,
            `TouchActions and Events – Handling user gestures`,
            `WebApp Test – Automating Web based testing on Chrome Browser`,
            `Hybrid App Test – Automating the mobile messaging app`,
            `SubHeading: Unit Test Framework`,
            'TestNG Introduction',
            `TestNG Annotations`,

        ]
    },
    {
        name: 'nodejs-online-training',
        title: 'NodeJS Course Syllabus',
        duration: '20 hours',
        info: `Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. 
        Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.`,
        content: [
            `SubHeading: Introduction and Foundation`,
            `Introduction`,
            `The Node.js framework`,
            `Installing Node.js`,
            `Using Node.js to execute scripts`,
            `Debugging script`,
            `SubHeading: Node Projects`,
            `The Node Package Manager`,
            `Creating a project`,
            `The package.json configuration file`,
            `Global vs. Local package installation`,
            `SubHeading: Working with asynchronous programming`,
            `Asynchronous basics`,
            `Callback functions`,
            `Working with Promises`,
            `Advance promises`,
            `Using Request module to make api calls	`,
            `SubHeading: Building a HTTP Server with Node.JS using HTTP APIs`,
            `The HTTP protocol	`,
            `Building an HTTP server`,
            `Rendering a response`,
            `Processing query strings`,
            `Processing posted data	`,
            `SubHeading: File System	`,
            `Synchronous vs. Asynchronous I/O`,
            `Path and directory operations`,
            `__dirname and __filename`,
            `Asynchronous file reads and writes`,
            `SubHeading: Buffers, Streams, and Events	`,
            `Using buffers for binary data`,
            `Flowing vs. non-flowing streams`,
            `Streaming I/O from files and other sources`,
            `Processing streams asynchronously`,
            `SubHeading: Working with ExpressJS	`,
            `Configuring Express	`,
            `Postman configuration`,
            `Using REST`,
            `JSON Data`,
            `Reading POST data`,
            `CRUD operations`,
            `Adding middleware	`,
            `SubHeading: MongoDB	`,
            `How Node.js connects to databases	5`,
            `RDBMS databases and NoSQL databases`,
            `Connecting to Mongodb databases`,
            `Performing CRUD operations`,
            `SubHeading: Socket.io, The Front-end, and A Chat App	`,
            `Getting Started`,
            `Adding Socket.io To Your App`,
            `Exploring The Front-end`,
            `Sending Live Data Back & Forth`,
            `Creating The Front-end UI	`,
            `Showing Messages In App`,
            `Working With Time`,
            `Timestamps`,
            `Show Message Time In Chat App`,
            `Chat application Project`

        ]
    },
    {
        name: 'js-online-training',
        title: 'Javascript Course Syllabus',
        duration: '15 hours',
        info: `JavaScript is a dynamic computer programming language. 
        It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.
         It is an interpreted programming language with object-oriented capabilities.
         New javascript syntax with ES6 boosts js power with nodejs and reactjs`,
        content: [
            `Introduction To Java Script`,
            `Syntax`,
            `Statements`,
            `Comments`,
            `Introduction To Client Side Scripting`,
            `JavaScript Types`,
            `Variables In JS`,
            `Datatypes In JS`,
            `Operators In JS`,
            `Conditional Statements`,
            `Java Script Loops`,
            `JS Popup Boxes`,
            `JS Events`,
            `JS Arrays`,
            `Working With Arrays`,
            `JS Objects`,
            `JS Functions`,
            `Operators`,
            `Arithmetic`,
            `Assignment`,
            `Comparison`,
            `Logical`,
            `Conditional`,
            `Using Java Script In Realtime`,
            `JS Popup Boxes`,
            `Validation Of Forms`,
            `The DOM, Nodes, And Objects`,
            `Understanding The DOM`,
            `Adding Nodes To The DOM`,
            `Deleting`,
            `Nodes From The DOM`,
            `NodeJs basics`
        ]
    },
    {
        name: 'java-online-training',
        title: 'Java Course Syllabus',
        duration: '25 hours',
        info: `Automation testing using Selenium and other automation tools with Java has made life easier for both developers and testers. 
        Being an open-source tool, it provides an opportunity to speed up the time of execution and to remove manual redundancy and human prone errors. 
        Java is a hugely popular programming language, given the extensive support it receives from the developer community. 
        Selenium with Java has proved helpful and provided an optimized way of testing, especially in terms of regression testing and cross browser testing. 
        With multiple plugins making their way into Selenium, it has resulted in making testing effortless and less time-consuming. 
        Continuous Integrations with tools like Jenkins and Maven have led to continuous testing models.`,
        content: []
    },
    {
        name: 'python-online-training',
        title: 'Python Course Syllabus',
        duration: '25 hours',
        info: `Automation testing using Selenium with Java has made life easier for both developers and testers.
         Being an open-source tool, it provides an opportunity to speed up the time of execution and to remove manual redundancy and human prone errors. 
         Java is a hugely popular programming language, given the extensive support it receives from the developer community. 
         Selenium or Appium with Java has proved helpful and provided an optimized way of testing, especially in terms of regression testing and cross browser testing. 
         With multiple plugins making their way into Selenium, it has resulted in making testing effortless and less time-consuming. 
         Continuous Integrations with tools like Jenkins and Maven have led to continuous testing models.`,
        content: []
    },
    {
        name: 'robot-framework-online-training',
        title: 'Robot Framework Course Syllabus',
        duration: '25 hours',
        info: `Robot Framework is a keyword-driven test automation framework, written in Python. 
        Features include: high-level architecture, simple tabular syntax, data-driven test cases, separate test data editor, clear reports. It's functionality can be extended through self-developed and Remote libraries.`,
        content: []
    },
    {
        name: 'eggplant-online-training',
        title: 'Eggplant Course Syllabus',
        duration: '25 hours',
        info: `Eggplant Functional is a black-box GUI test automation tool,
        Its approach uses image matching technology as opposed to looking to the object-level of the application being tested. This allows for system-wide automation of a system-under-test as opposed to an application-specific solution. It also means that the technology used to build the application to be tested does not matter, nor does the system that the application runs on
        Eggplant Functional uses a two-system model, consisting of a controller machine, where scripts are authored and executed, and a system under test (SUT) which may be running a VNC server. Eggplant Functional can either connect to the VNC server via its built-in viewer via TCP/IP, or connect to a system that supports Remote Desktop Protocol (RDP).[2] Any system that has a VNC server for it can be a SUT. Originally Mac-only, the controller environment/IDE is now available on Linux[3] and Windows using GNUstep`,
        content: []
    },
    {
        name: 'react-online-training',
        title: 'ReactJs Course Syllabus',
        duration: '25 hours',
        info: `React (also known as React. js or ReactJS) is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. 
        React can be used as a base in the development of single-page or mobile applications.`,
        content: []
    }
];

export default articles