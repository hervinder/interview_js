Understand what it is

- Who is the customer?
- What problems we solved for them?
- What are expected to create?

Decide the scope that suits

- To Dos and not To Dos
- Check with the interviewer

System Design

- What’s the goal?
  - Basic Functional goal
  - Non-functional goal
- What is the MVP?
- What is the Data flow/API?
- What is the states of the UI?
- How would you separate them from parts and put together
  - Components composition
  - Components communication
- What is the core spec?

Product design

- The goal of the web service
- Relation to the native app?
  - Replica?
  - Lite version?
  - PWA?
- Target platform
  - Mobile
  - Desktop
- Mobile first?
- SEO/SSR/SPA?
- Volumn of the service
- Team members
- MVP, core features?
- Highlights?
- Future roadmap?

Assumptions on background

- DAU/MAU of the service
- How many Interactions?
- Average API response?

Big Picture

- Draw diagram or list outline
- Flow
  - Data Flow
  - User interaction flow
- Check with Interviewer

Key challenges, bottleneck (smoothness & speed)

- Smoothness
  - Instant Go Back
    - Page stack
    - Global state
    - API Caching + WebSocket update
  - Instant Go Forward
    - Skeleton
    - Loading indicator
  - Instant Interaction Response
    - Passive event listener (scrolling, {passive: true} in “touchstart” | “touchmove”)
  - Native like animation/transition
  - Hand Gesture
  - Native like UI-Components
- Speed
  - First screen
    - SSR + initial Data
  - Multiple bundling
    - For mainstream/traditional browsers
  - Loading
    - Code splitting
    - Lazy load
      - Offscreen
        - Lazy load Image/videos
        - Lazy UI component update
      - Infinite Scroll
    - Preloading
      - Background module loading
      - Data prefetching
      - HTTP/2 Push
        - <link rel="preload" href="/styles.css" as="style">
        - <link rel="preload" href="/example.png" as="image">
      - Service Worker Cache API
      - Inline CSS/Image Base64
  - Caching
    - CDN
    - HTTP Header
    - Service Worker Cache API / Offline
  - Resources
    - Images
      - Compression
      - Base64
      - Lazy Load
      - Progressive Resolution Images
      - SVGs for icons
      - Caching
- API
  - Long polling
    - Mobile battery consumption
  - WebSocket
    - don’t support HTTP proxies, but only TCP proxies; HTTP DoS service doesn’t work
    - stateful, a connection doesn’t scale to new server
    - Mobile battery consumption, even more over antenna
  - SSE
    - A HTTP connection to transfer streams many times
    - One way: from server to clients
    - Multiplex over HTTP/2
    - new EventSource('URL’).addEventListener(“message”, handler)
      - 'Content-Type': 'text/event-stream'
  - BFF
    - Backend For Frontend
    - API aggregation/Composition/Computation
    - Over micro-services
    - GraphQL
  - Caching
  - RAIL speed framework
    - https://web.dev/rail/
    - Response: process events in under 50ms
      - So that the total response could be 100ms
    - Animation: produce a frame in 10 ms
    - Idle: maximize idle time
      - Fast initial load, then work in Idle time
      - <50s processing to allow user for further interaction any time
      - Stop on user interaction
    - Load: deliver content and become interactive in under 5 seconds
- Matrix
  - DOMContentLoad
  - Load
  - Total Blocking time
    - FCP: First Content Paint
    - TTI: Time to Interactive
    - First Input Delay
  - Latest content paint < 2.5s

Trade-off, alternatives, TODO

- Nothing is perfect
- Try to list up possible improvements
- And anything want to do if more time given
