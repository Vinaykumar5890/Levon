🚦 Traffic Light Simulator with Pedestrian Crossing 🚶‍♂️

Task Overview
This project implements a traffic light simulator with a pedestrian crossing feature. It showcases a fully functional traffic light system, with lights following the standard sequence and allowing pedestrians to safely cross the road when a button is pressed.

🛠️ Requirements
1. Traffic Light Control
Lights: The traffic light includes three lights—Red, Yellow, and Green.
Light Sequence: The sequence follows this order:
Green → Yellow → Red → Green
Timings:
Green: 10 seconds
Yellow: 3 seconds
Red: 7 seconds


2. Pedestrian Crossing
Pedestrian Button: Clicking the button will request the traffic light to change to Red, allowing pedestrians to cross.
If clicked during Green or Yellow, the system will wait for the current cycle to finish before switching to Red.
After a pedestrian crossing, the Red light remains on for an additional 5 seconds.


3. State Management (useState)
useContext is used to manage:
Current light state
Pedestrian crossing requests
Light transition timers
Actions/Reducers: Control the light transitions, pedestrian requests, and timers effectively.

4. Timers and Delays
JavaScript Timers: Light transitions are handled using setInterval or setTimeout.
Timers manage:
Light changes
Pedestrian requests
Pausing, resetting, and adjusting based on interactions.

5. UI and Interactions
Traffic Light Display:
The traffic lights are vertically aligned, each color accurately represented.
Pedestrian Crossing Button:
A button is provided for requesting crossing, with visual feedback when pressed (e.g., a flashing pedestrian light).
CSS Animations/Transitions: Smooth transitions between light changes.

6. Bonus Challenge
Emergency Vehicle Override: Emergency vehicles can override the sequence, allowing them to pass regardless of the light.
Countdown Timer: A visible countdown shows the remaining seconds before the next light change.

💻 **Implementation Details**
React Component Structure
Main Component: TrafficLight
Subcomponents: GreenLight, YellowLight, RedLight
Pedestrian Crossing: PedestrianButton manages pedestrian requests.
State Management (useContext)
useContext is used to hold and manage global states related to light transitions and crossing requests.
Actions/Reducers control how the state changes based on user interaction.
Timers (setTimeout/setInterval)
Light timers are handled within useContext to ensure accurate transitions.



🖥️ **Features**
Realistic Traffic Light Cycle: Standard Green, Yellow, and Red light cycle with timers.
Pedestrian Crossing: Allows pedestrians to safely cross with a button-press system.
Emergency Vehicle Override: Overrides light cycles for emergency vehicles to pass through.
Countdown Timer: Displays time left for each light before changing.
CSS Transitions: Smooth animations for light transitions.

📂 **Project Structure**


traffic-light-simulator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TrafficLight.js
│   │   
│   │   
│   |
│   │   
│   |
│   └── App.js
├── package.json
└── README.md

🛠️ **Tools & Technologies**

React.js: Frontend framework
CSS: Styling and animations

setInterval / setTimeout: Timer management for light transitions

🌟 **Bonus Features**
Emergency Vehicle Override: Interrupt the light sequence to let emergency vehicles pass.
Countdown Timer: Visual timer for the next light change.
Animated Transitions: Smooth, CSS-based light changes.


📋 **Future Enhancements**

**Mobile Responsiveness**: Improve layout and interactions for smaller screens.
**Sound Alerts**: Add sound alerts for pedestrians when crossing is allowed.
**Traffic Flow Simulation**: Simulate vehicle flow and pedestrian movement on the road.
🤝 Contributing
Contributions are welcome! Please submit a pull request or raise an issue for any suggestions or fixes.

📝 **License**
This project is licensed under the MIT License.

📧 **Contact**
For more information or questions, feel free to reach out:

Email: devaragarivinayyadav7@gmail.com
GitHub: https://github.com/Vinaykumar5890/
