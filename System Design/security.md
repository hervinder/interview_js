What is cross-site scripting (XSS)?

Cross-site scripting attacks are those in which attackers inject malicious code, usually client-side scripts, into web applications. Because of the number of possible injection locations and techniques, many applications are vulnerable to this attack method.

Impact

Carry out any action that the user is able to perform.
Read any data that the user is able to access.
Capture the user's login credentials.
Perform virtual defacement of the web site.
Inject trojan functionality into the web site.

Preventing XSS attacks.

1. Validating the input that arrives at the application :- All the data that comes to the web application from a user or from an outside application must be validated. This is the most basic prevention method.
2. Encoding the HTML before sending to the browser :- To help prevent XSS attacks, an application needs to ensure that all variable output in a page is encoded before being returned to the end user.
3. Content Security Policy. As a last line of defense, you can use Content Security Policy (CSP) to reduce the severity of any XSS vulnerabilities that still occur

What is CSRF?
Cross-site request forgery (also known as CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform. It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.

Impact
For example, this might be to change the email address on their account, to change their password, or to make a funds transfer.

Preventing
The most robust way to defend against CSRF attacks is to include a CSRF token within relevant requests. The token should be:
//https://portswigger.net/web-security/csrf

Denial-of-service (DoS)/ distributed-denial-of-service (DDoS) attack

A denial-of-service attack is when an attacker sends an enormous amount of traffic to a website in an attempt to overwhelm the hosting server to disrupt and even paralyze service. What’s more, for websites renting cloud servers with volume-based costing, they could be charged with an astronomical cost by the service provider.

Secuirty Measures:

1. HTTP Strict Transport Security (HSTS)

HTTP Strict Transport Security instructs the browser to access the webserver over HTTPS only. Once configured on the server, the server sends the header in the response as Strict-Transport-Security. After receiving this header, the browser will send all the requests to that server only over HTTPS.

In this article, we discuss the most important HTTP headers that you should configure on your web server in order to improve its security.

We will understand what is the role of each header and what attacks can be implemented to take advantage of its misconfiguration.

HTTP headers prevent malicious exploitation

Here are the types of interesting HTTP headers that we will discuss:

Server headers that protect against attacks
HTTP Strict Transport Security
Content Security Policy
Access-Control-Allow-Origin
X-FrameOptions
X-XSS-Protection
X-Content-Type-Options
Server headers that leak information
Server
X-Powered-By
X-AspNet-Version
Background on HTTP headers

I.Server headers that protect against attacks

1.HTTP Strict Transport Security (HSTS)
HTTP Strict Transport Security instructs the browser to access the webserver over HTTPS only. Once configured on the server, the server sends the header in the response as Strict-Transport-Security. After receiving this header, the browser will send all the requests to that server only over HTTPS. There are 3 directives for the HSTS header:

Max-age: This defines a time for which the webserver should be accessed only through HTTPS. The default value of this header is 31536000 seconds. This is the maximum age (time) for which HSTS is valid. The server updates this time with every new response hence preventing it from expiring.
http header results

http header results displayed

IncludeSubDomains: This applies the control over subdomains of the website as well.
Preload: The preload list is the list of the websites hardcoded into Google Chrome browser which can communicate via HTTPS only. The owner of the website can submit its URL to be included in the preload list. This list is maintained by Google but other browsers also use it. The preload list can be found here:
Attack Scenario

Without HSTS enabled, an adversary can perform a man-in-the-middle attack and steal sensitive information from the web session of a user. Imagine a scenario where a victim connects to an open Wi-Fi which is actually in the control of an attacker. Accessing a website over HTTP would allow the attacker to intercept the request and read the sensitive information. (The site is on HTTPS but user accesses it with HTTP which later gets redirected to HTTPS). If the same user had accessed the website earlier, the HSTS details recorded in the browser would have caused the connection to be made over HTTPS automatically.

1. Content Security Policy

Content Security Policy is used to instruct the browser to load only the allowed content defined in the policy. This uses the whitelisting approach which tells the browser from where to load the images, scripts, CSS, applets, etc. If implemented properly, this policy prevents the exploitation of Cross-Site Scripting (XSS), ClickJacking, and HTML injection attacks.

3. Access-Control-Allow-Origin

Access-Control-Allow-Origin is a CORS (Cross-Origin Resource Sharing) header. This header allows the defined third party to access a given resource. This header is a workaround for restrictions posed by the Same Origin Policy which doesn’t allow two different origins to read the data of each other.

For example, if Site ABC wants to access a resource of Site XYZ, Site XYZ will respond with an Access-Control-Allow-Origin header with the address of Site ABC. In this way Site XYZ is telling the browser who is allowed to access its content:

4. Set-Cookie

The cookie values set by the application are sent by the server in the Set-Cookie header. After receiving this header, the browser will send the cookies with every HTTP request in the Cookie header.

The HTTP cookies can often contain sensitive information (especially the session cookies) and they need to be protected against unauthorized access.

The following attributes can be set for securing the cookies:

Secure: A cookie set with this attribute will only be sent over HTTPS and not over the clear-text HTTP protocol (which is susceptible to eavesdropping).

HTTPOnly: The browser will not permit JavaScript code to access the contents of the cookies set with this attribute. This helps in mitigating session hijacking through XSS attacks.

5. X-FrameOptions

This header is used to protect the user against ClickJacking attacks by forbidding the browser to load the page in an iframe element. There are 3 directives for X-FrameOptions:

X-Frame-Options: DENY – This will not allow the page to be loaded in a frame on any website.

6. X-XSS-Protection
   This header is designed to protect against Cross-Site Scripting attacks. It works with the XSS filters used by the modern browsers and it has 3 modes:

X-XSS-Protection: 0; – Value 0 will disable the XSS filter
X-XSS-Protection: 1; – Value 1 will enable the filter, in case the XSS attack is detected, the browser will sanitize the content of the page in order to block the script execution.
X-XSS-Protection: 1; mode=block – Value 1 used with block mode will prevent the rendering of the page if an XSS attack is detected.

7. X-Content-Type-Options

This response header is used to protect against MIME sniffing vulnerabilities. So what is MIME Sniffing? MIME sniffing is a feature of the web browser to examine the content of the file being served. It works as follows:

A web browser requests a file. The server sends a file with the HTTP header Content-Type set.
The web browser ‘sniffs’ the content of this file in order to determine the file format.
Once done with the analysis, the browser compares its result with the one sent by the server. If there is a mismatch, the browser uses the identified format.
