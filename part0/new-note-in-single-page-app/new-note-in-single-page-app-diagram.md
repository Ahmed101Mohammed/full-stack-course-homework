sequence diagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: json file (with new data: {content: "new message", date: "2024-01-05T20:29:47.658Z"})