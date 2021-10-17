from http.server import BaseHTTPRequestHandler, HTTPServer
import time

hostName = '0.0.0.0'
serverPort = 8080

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        if (self.path == "/test"):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(bytes("<html><head><title>Test</title></head>", "utf-8"))
            self.wfile.write(bytes(f"<p>Path: {self.path}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Client_address: {self.client_address}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>MessageClass: {self.MessageClass}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Close_connection: {self.close_connection}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Command: {self.command}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Protocol_version: {self.protocol_version}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Headers: {self.headers}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Request_version: {self.request_version}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Responses: {self.responses}</p>", "utf-8"))
            self.wfile.write(bytes(f"<p>Requestline: {self.requestline}</p>", "utf-8"))
            self.wfile.write(bytes("<body><p>This is an example webserver</p></body></html>", "utf-8"))
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            self.wfile.write(bytes("<html><head><title>Test</title></head>", "utf-8"))
            self.wfile.write(bytes(f"<p>Request: {self.path}</p>", "utf-8"))
            self.wfile.write(bytes("<body><p>Requested path not found</p></body></html>", "utf-8"))


if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)

    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")