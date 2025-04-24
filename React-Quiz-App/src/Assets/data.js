 const data = [
    {
      question: "1. Which device is required for the Internet connection?",
      option1: "A. Modem",
      option2: "B. Router",
      option3: "C. LAN Cable",
      option4: "D. Pen Drive",
      ans: 1,
    },
    {
      question: "2. Which continent has the highest number of countries?",
      option1: "A. Asia",
      option2: "B. Europe",
      option3: "C. North America",
      option4: "D. Africa",
      ans: 4,
    },
    {
      question: "3. Junk e-mail is also called?",
      option1: "A. Spam",
      option2: "B. Fake",
      option3: "C. Archived",
      option4: "D. Bin",
      ans: 1,
    },
    {
      question: "4. A computer cannot BOOT if it does not have the?",
      option1: "A. Application Software",
      option2: "B. Internet",
      option3: "C. Operating System",
      option4: "D. Mouse",
      ans: 3,
    },
    {
      question: "5. First page of Website is termed as?",
      option1: "A. Index Page",
      option2: "B. Homepage",
      option3: "C. Sitemap",
      option4: "D. Pen Drive",
      ans: 2,
    },
    {
      question: "6. What does CPU stand for?",
      option1: "A. Central Process Unit",
      option2: "B. Central Processing Unit",
      option3: "C. Computer Processing Unit",
      option4: "D. Control Processing Unit",
      answer: 2
    },
    {
      question: "7. Which company developed the Windows operating system?",
      option1: "A. Apple",
      option2: "B. IBM",
      option3: "C. Microsoft",
      option4: "D. Google",
      answer: 3
    },
    {
      question: "8. What is the brain of the computer?",
      option1: "A. RAM",
      option2: "B. Hard Drive",
      option3: "C. CPU",
      option4: "D. GPU",
      answer: 3
    },
    {
      question: "9. Which device is used to display output?",
      option1: "A. Keyboard",
      option2: "B. Monitor",
      option3: "C. Mouse",
      option4: "D. Scanner",
      answer: 2
    },
    {
      question: "10. What does HTTP stand for?",
      option1: "A. HyperText Transmission Protocol",
      option2: "B. HighText Transfer Protocol",
      option3: "C. HyperText Transfer Protocol",
      option4: "D. Hyper Transfer Text Protocol",
      answer: 3
    },
    {
      question: "11. Which one is an input device?",
      option1: "A. Monitor",
      option2: "B. Printer",
      option3: "C. Keyboard",
      option4: "D. Speaker",
      answer: 3
    },
    {
      question: "12. Which file extension is used for an executable file in Windows?",
      option1: "A. .doc",
      option2: "B. .exe",
      option3: "C. .pdf",
      option4: "D. .jpg",
      answer: 2
    },
    {
      question: "13. What is the permanent memory built into your computer called?",
      option1: "A. RAM",
      option2: "B. ROM",
      option3: "C. Hard Disk",
      option4: "D. Cache",
      answer: 2
    },
    {
      question: "14. Which part of the computer is responsible for graphics processing?",
      option1: "A. SSD",
      option2: "B. CPU",
      option3: "C. RAM",
      option4: "D. GPU",
      answer: 4
    },
    {
      question: "15. What does GUI stand for?",
      option1: "A. General User Interface",
      option2: "B. Graphical User Interface",
      option3: "C. Graphics Unified Interface",
      option4: "D. Grouped User Interface",
      answer: 2
    },
    {
      question: "16. What is a URL?",
      option1: " A. Uniform Resource Locator",
      option2: " B. Universal Research Link",
      option3: " C. User Reference Link",
      option4: " D. Unified Resource Log",
      answer: 1
    },
    {
      question: "17. Which one is a web browser?",
      option1: " A. Google",
      option2: " B. Firefox",
      option3: " C. Microsoft",
      option4: " D.  Windows",
      answer: 2
    },
    {
      question: "18. What does LAN stand for?",
      option1: " A. Local Access Network",
      option2: " B. Large Area Network",
      option3: " C. Local Area Network",
      option4: " D. Logical Area Network",
      answer: 3
    },
    {
      question: "19. What is phishing?",
      option1: " A. A way to hack passwords",
      option2: " B. A cyber attack using fake websites",
      option3: " C. A tool to manage databases",
      option4: " D. A type of malware",
      answer: 2
    },
    {
      question: "20. Which one is an operating system?",
      option1: " A. Intel",
      option2: " B. Ubuntu",
      option3: " C. Chrome",
      option4: " D. Google",
      answer: 2
    },
    {
      question: "21. What is an IP address used for?",
      option1: " A. Identify location on Earth",
      option2: " B. Identifies a device on a network",
      option3: " C. Identifies users",
      option4: " D. Stores passwords",
      answer: 2
    },
    {
      question: "22. What is the primary function of RAM?",
      option1: " A. Long-term storage",
      option2: " B. Process graphics",
      option3: " C. Temporary data storage for active tasks",
      option4: " D. Store system backups",
      answer: 3
    },
    {
      question: "23. Which of the following is not a programming language?",
      option1: " A. Python",
      option2: " B. HTML",
      option3: " C. Java",
      option4: " D. C++",
      answer: 2
    },
    {
      question: "24. What does the term “bug” refer to in computing?",
      option1: " A. Virus",
      option2: " B. Security flaw",
      option3: " C. Error in code",
      option4: " D. Extra code",
      answer: 3
    },
    {
      question: "25. What is open source software?",
      option1: " A. Software with a monthly subscription",
      option2: " B. Free to use and modify",
      option3: " C. Only used by developers",
      option4: " D. Requires a license key",
      answer: 2
    },
    {
      question: "26. What does SSD stand for in computer storage?",
      option1: " A. Super Storage Device",
      option2: " B. Solid State Drive",
      option3: " C. Simple Storage Disk",
      option4: " D. Secondary Storage Drive",
      answer: 2
    },
    {
      question: "27. Which device connects computers to the internet?",
      option1: " A. Router",
      option2: " B. Scanner",
      option3: " C. Switch",
      option4: " D. Monitor",
      answer: 1
    },
    {
      question: "28. What does BIOS stand for?",
      option1: " A. Binary Input Output System",
      option2: " B. Basic Input Output System",
      option3: " C. Built-in Operating Software",
      option4: " D. Boot Integrated Operating Service",
      answer: 2
    },
    {
      question: "29. Which of these is a valid file system format?",
      option1: " A. HTML",
      option2: " B. FAT32",
      option3: " C. HTTP",
      option4: " D. BIOS",
      answer: 2
    },
    {
      question: "30. Which company makes macOS?",
      option1: " A. Microsoft",
      option2: " B. Linux",
      option3: " C. Apple",
      option4: " D. Dell",
      answer: 3
    }
  ];

  export default data;
 