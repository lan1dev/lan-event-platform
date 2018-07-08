define({ "api": [
  {
    "type": "post",
    "url": "api/tickets/",
    "title": "Create Ticket",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Request URL:  http://localhost:9001/api/tickets\nRequest Method: POST",
        "type": "js"
      }
    ],
    "name": "CreateTicket",
    "group": "Tickets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Ticket created!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/ticket.js",
    "groupTitle": "Tickets"
  },
  {
    "type": "get",
    "url": "api/tickets/",
    "title": "Request Tickets",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Request URL: http://localhost:9001/api/tickets\nRequest Method: GET",
        "type": "js"
      }
    ],
    "name": "GetTickets",
    "group": "Tickets",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tickets",
            "description": "<p>Array of Ticket objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"tickets\": [\n     {\n       \"name\": \"Age over 20\",\n       \"price\": 20\n     },\n     {\n       \"name\": \"Age under 20\",\n       \"price\": 10\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/ticket.js",
    "groupTitle": "Tickets"
  },
  {
    "type": "delete",
    "url": "api/tickets/:id",
    "title": "Remove Ticket",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Request URL: http://localhost:9001/api/tickets/5b4170549f679b01facced3c\nRequest Method: DELETE",
        "type": "js"
      }
    ],
    "name": "RemoveTicket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Tickets unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Ticket removed!\"\n}.",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/ticket.js",
    "groupTitle": "Tickets"
  },
  {
    "type": "put",
    "url": "api/tickets/:id",
    "title": "Update Ticket",
    "examples": [
      {
        "title": "Example usage:",
        "content": "Request URL: http://localhost:9001/api/tickets/5b4170549f679b01facced3c\nRequest Method: PUT",
        "type": "js"
      }
    ],
    "name": "UpdateTicket",
    "group": "Tickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ticket unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Ticket updated!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/ticket.js",
    "groupTitle": "Tickets"
  }
] });
