import { Question, WeekQuestions, PracticeMode } from '../types';

export function getAllQuestions(mode: PracticeMode): Question[] {
  const weekQuestions: WeekQuestions = {
    week1: [
      {
        question: "Which of the following is a building block of edge computing?",
        options: [
          "Data ingestion and stream processing",
          "Centralized data centers",
          "High-bandwidth CDN",
          "Traditional three-tier architecture"
        ],
        explanation:"Edge computing requires efficient data ingestion (e.g., using Kafka) and stream processing for real-time data analysis. These are key building blocks for processing data at the edge, as opposed to sending data to the cloud for processing.",
        correctAnswer: 0,
      },
      {
        question: "In edge computing, which tier is responsible for running machine learning models?",
        options: [
          "Data Source Tier",
          "Storage Tier",
          "Actionable Insight Tier",
          "Intelligence Tier"
        ],
        explanation:"The Intelligence Tier in edge computing is responsible for running machine learning models. While the cloud may handle model training, the edge handles model inferencing, providing real-time insights based on data from edge devices.",
        correctAnswer: 3,
      },
      {
        question: "What is the role of M2M brokers in edge computing?",
        options: [
          "Data storage management",
          "Enabling machine-to-machine communication",
          "Training machine learning models",
          "Real-time data conversion"
        ],
        explanation:"M2M (Machine-to-Machine) brokers orchestrate communication between devices in edge computing environments, enabling devices to exchange data without relying on centralized cloud servers",
        correctAnswer: 1,
      },
      {
        question: "What is a limitation of the current cloud system for AI use cases?",
        options: [
          "It offers only local processing capabilities",
          "It has a low capacity for data storage",
          "It cannot provide real-time responses due to latency",
          "It lacks programmability of the network stack"
        ],
        explanation:"Cloud computing, due to its centralized nature, suffers from latency issues when AI models need to respond in real-time. This limitation makes it unsuitable for mission-critical AI applications that require immediate feedback, which edge computing can address by processing data locally",
        correctAnswer: 2,
      },
      {
        question: "Which component is responsible for real-time queries and data processing in edge computing?",
        options: [
          "Stream Processing",
          "Function as a Service",
          "Object Storage",
          "M2M Brokers"
        ],
        explanation:"Stream processing allows real-time data analysis and immediate response to incoming data. In edge computing, this capability ensures that data is processed and acted upon as it arrives, reducing the delay in decision-making.",
        correctAnswer: 0,
      },
      {
        question: "How does edge computing mimic public cloud capabilities?",
        options: [
          "By centralizing data storage in remote data centers",
          "By providing capabilities like device management and stream analytics near data sources",
          "By reducing the need for hardware innovations",
          "By utilizing client-server architecture for processing"
        ],
        explanation:"Edge computing mimics public cloud capabilities by offering features like device management, stream analytics, and even running machine learning models close to where the data is generated, thus enhancing real-time decision-making.",
        correctAnswer: 1,
      },
      {
        question: "What is the primary purpose of the actionable insight layer in edge computing?",
        options: [
          "Storing unstructured data",
          "Running machine learning training models",
          "Sending alerts and controlling actuators",
          "Performing real-time data ingestion"
        ],
        explanation:"The actionable insight layer is responsible for converting insights from the intelligence layer into actions, such as sending alerts to stakeholders, updating dashboards, or controlling actuators to respond to events immediately.",
        correctAnswer: 2,
      },
      {
        question: "What is the primary advantage of edge computing over cloud computing?",
        options: [
          "High latency",
          "Centralized processing",
          "Data sovereignty",
          "Limited scalability"
        ],
        explanation:"The primary advantage of edge computing is that it reduces latency by processing data locally, closer to the source, and ensures data sovereignty by keeping sensitive data within local boundaries.",
        correctAnswer: 2,
      },
      {
        question: "Which IoT data flow path processes real-time data immediately upon generation?",
        options: [
          "Cold path",
          "Warm path",
          "Batch path",
          "Hot path"
        ],
        explanation:"The hot path in IoT systems refers to the processing of real-time data as it is generated. This is essential for applications that require immediate insights or actions, such as real-time monitoring of industrial systems.",
        correctAnswer: 3,
      },
      {
        question: "Which of the following is a key feature of Federated Learning?",
        options: [
          "Training occurs on centralized data",
          "Data remains decentralized while models are aggregated",
          "IoT data is processed only in the cloud",
          "Training is skipped in federated models"
        ],
        explanation:"Federated learning ensures that data remains decentralized, with the machine learning models being trained on local devices. Only model updates are aggregated at a central server, preserving privacy by keeping sensitive data on the local devices.",
        correctAnswer: 1,
      }
    ],
    week2: [
      {
        question: "Which IoT data flow path processes real-time data immediately upon generation?",
        options: [
          "Cold path",
          "Hot path",
          "Batch path",
          "Warm path"
        ],
        explanation: "Hot Path processes real-time data as soon as it is generated, ensuring immediate insights and actions.",
        correctAnswer: 1,
      },
      {
        question: "Because of _______ customers are not willing to send their data to cloud.",
        options: [
          "Data Integrity Concern",
          "Data Privacy Concern",
          "High Cost Concern",
          "None of these"
        ],
        explanation: "Data Privacy Concern prevents customers from sending data to the cloud due to fears of unauthorized access or breaches.",
        correctAnswer: 1,
      },
      {
        question: "What is the role of a \"Planner\" component in the Edge Controller?",
        options: [
          "Schedule and allocate tasks to edge nodes",
          "Manage communication between edge and cloud",
          "Monitor IoT device health",
          "Perform real-time analytics"
        ],
        explanation: "The Planner component in the Edge Controller is responsible for scheduling and allocating tasks efficiently to edge nodes for execution.",
        correctAnswer: 0,
      },
      {
        question: "Which of the following technologies is commonly used for IoT data storage and batch processing?",
        options: [
          "Azure Event Hub",
          "Kafka",
          "Data Lake",
          "IoT Hub"
        ],
        explanation: "Data Lake is widely used for storing and managing batch-processed IoT data, ensuring that large-scale sensor information is retained for further analytics.",
        correctAnswer: 2,
      },
      {
        question: "How does IoT Central differ from IoT Hub in Azure's IoT architecture?",
        options: [
          "IoT Central is a SaaS-based IoT application platform, while IoT Hub is a device management and messaging service.",
          "IoT Central only supports edge computing, while IoT Hub only supports cloud computing.",
          "IoT Central processes only batch data, while IoT Hub handles real-time data.",
          "IoT Central is used only for consumer IoT applications, while IoT Hub is used for industrial applications."
        ],
        explanation: "IoT Central is a managed SaaS platform that simplifies IoT application development, whereas IoT Hub is a more flexible PaaS offering for managing devices and bidirectional messaging.",
        correctAnswer: 0,
      },
      {
        question: "Which of the following is an example of a real-time data processing tool in IoT?",
        options: [
          "Data Factory",
          "Azure Synapse",
          "Stream Analytics",
          "Power BI"
        ],
        explanation: "Stream Analytics is used for real-time data processing (hot path) in IoT platforms. It enables real-time monitoring and decision-making based on incoming data.",
        correctAnswer: 2,
      },
      {
        question: "What is the function of IoT Edge in an IoT architecture?",
        options: [
          "It acts as a middleware between cloud and devices.",
          "It is used only for device registration.",
          "It only manages IoT device security.",
          "It provides local processing and reduces cloud dependency."
        ],
        explanation: "IoT Edge enables local processing of data before sending it to the cloud, reducing latency and bandwidth usage.",
        correctAnswer: 3,
      },
      {
        question: "Which of the following is NOT a component of IoT data processing architecture?",
        options: [
          "Hot Path",
          "Cold Path",
          "Warm Path",
          "Static Path"
        ],
        explanation: "IoT data processing consists of Hot Path (real-time), Cold Path (batch processing), and Warm Path (small batch processing). There is no \"Static Path\" in IoT architecture.",
        correctAnswer: 3,
      },
      {
        question: "What is the role of Digital Twins in an IoT ecosystem?",
        options: [
          "It creates a virtual model of physical IoT devices.",
          "It replaces physical sensors in IoT devices.",
          "It stores real-time sensor data permanently.",
          "It only provides security for IoT devices."
        ],
        explanation: "Digital Twins enable virtual representations of physical devices, allowing real-time monitoring, simulation, and optimization of IoT applications.",
        correctAnswer: 0,
      },
      {
        question: "In the IoT architecture, what does the Presentation Layer primarily handle?",
        options: [
          "Device management and provisioning",
          "Reporting, visualization, and data APIs",
          "Real-time data processing",
          "IoT security and encryption"
        ],
        explanation: "The Presentation Layer provides tools for data visualization, reports, and APIs, allowing users to interpret IoT data effectively.",
        correctAnswer: 1,
      }
    ],
    week3: [
      {
        question: "In the context of Edge ML, which of the following describes a key benefit of local data processing at the edge?",
        options: [
          "It reduces latency by avoiding the round-trip time to cloud data centers.",
          "It requires large amounts of continuous bandwidth for streaming data to the cloud.",
          "It relies solely on batch processing in remote cloud servers.",
          "It prevents devices from operating when offline."
        ],
        explanation: "Processing data locally minimizes delay by eliminating the need to send data to remote cloud servers.",
        correctAnswer: 0,
      },
      {
        question: "What is the main function of a Content Delivery Network (CDN) as mentioned in the context of cloud storage?",
        options: [
          "Providing containerized machine learning models",
          "Scheduling data processing tasks at the edge",
          "Replicating and caching data across multiple edge locations",
          "Running inference on large, unstructured datasets"
        ],
        explanation: "A CDN replicates and caches content closer to end users to reduce access latency.",
        correctAnswer: 2,
      },
      {
        question: "Which step in the machine learning workflow involves feeding a model with new, unlabeled data to generate predictions?",
        options: [
          "Data collection",
          "Model training",
          "Model deployment",
          "Inference"
        ],
        explanation: "Inference uses a trained model to predict outcomes from new input data.",
        correctAnswer: 3,
      },
      {
        question: "What is the chief advantage of deploying machine learning models in containers at the edge?",
        options: [
          "Increased manual configuration for network resources",
          "Portability and ease of updating the model near data sources",
          "Requirement of high-end servers for container orchestration",
          "Strict reliance on proprietary APIs for all edge services"
        ],
        explanation: "Containers allow for consistent, portable deployment and rapid updates on edge devices",
        correctAnswer: 1,
      },
      {
        question: "Azure IoT Hub is characterized by which of the following?",
        options: [
          "A static, one-way communication channel to the cloud",
          "Absence of protocol support for IoT devices",
          "A managed service offering bi-directional communication between devices and the cloud",
          "An offline-only solution that does not integrate with other Azure services"
        ],
        explanation: "Azure IoT Hub enables devices to both send data to and receive commands from the cloud securely.",
        correctAnswer: 2,
      },
      {
        question: "Which of the following object detection models is known for its single-step approach, simultaneously predicting bounding boxes and class labels?",
        options: [
          "Faster R-CNN",
          "SSD (Single Shot Detector)",
          "Fast R-CNN",
          "RCNN"
        ],
        explanation: "SSD performs object localization and classification in one forward pass, making it fast.",
        correctAnswer: 1,
      },
      {
        question: "Why is specialized hardware (e.g., GPUs, NPUs) often necessary at the edge to run machine learning workloads effectively?",
        options: [
          "Deep learning inference typically requires accelerated computation",
          "Traditional CPUs cannot connect to IoT devices",
          "It reduces the need for bandwidth and storage",
          "Virtual machines cannot handle parallel computing"
        ],
        explanation: "GPUs/NPUs accelerate the complex computations required by deep learning models, whereas the given answer \"Traditional CPUs cannot connect to IoT devices\" is incorrect.",
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a key characteristic of the YOLOv3 object detection algorithm?",
        options: [
          "It selects regions in an image using a region proposal network.",
          "It processes the entire image in one forward pass to predict bounding boxes and probabilities.",
          "It focuses only on classification without localizing objects",
          "It relies heavily on multi-stage detection pipelines"
        ],
        explanation: "YOLOv3 uses a single network pass to quickly generate both bounding box coordinates and class probabilities.",
        correctAnswer: 1,
      },
      {
        question: "What is the first step in deploying an Edge ML workload to an IoT edge device?",
        options: [
          "Target the IoT edge runtime on the edge device.",
          "Write a deployment manifest to define the workload.",
          "Push the containers to a container registry.",
          "Package the data transform, insight, and action into containers."
        ],
        explanation: "The initial step is containerizing the workload components so they can be deployed on the edge device.",
        correctAnswer: 3,
      },
      {
        question: "What is the primary advantage of a SaaS architecture for computer vision models?",
        options: [
          "It eliminates the need to label images before training models.",
          "It requires domain experts to manage the training process entirely.",
          "It restricts the training process to the cloud without offline support.",
          "It allows seamless scaling of datasets and downloading models for offline use."
        ],
        explanation: "A SaaS model offers scalable deployment and easy access to trained models, which can be used offline as needed.",
        correctAnswer: 3,
      }
    ],
    week4: [
      
        {
          "question": "Which of the following control plane components is the only one that interacts directly with etcd?",
          "options": [
            "Controller Manager",
            "API Server",
            "Scheduler",
            "Kubelet"
          ],
          "explanation": "The API Server is the sole component in Kubernetes that directly accesses etcd to read and write cluster state.",
          "correctAnswer": 1
        },
        {
          "question": "In the context of Kubernetes, orchestration is best described as:",
          "options": [
            "Managing and deploying containers across multiple hosts in a fault-tolerant manner",
            "Running local compute jobs on a single node",
            "Using hypervisors to isolate VMs on a single server",
            "Ensuring minimal CPU and memory usage across cloud instances"
          ],
          "explanation": "Orchestration in Kubernetes coordinates how containers are deployed, scaled, and managed across multiple nodes.",
          "correctAnswer": 0
        },
        {
          "question": "Which of the following Kubernetes worker node components is primarily responsible for managing pod networking and handling load balancing?",
          "options": [
            "kube-proxy (Service proxy)",
            "Scheduler",
            "Container runtime",
            "Kubelet"
          ],
          "explanation": "The kube-proxy handles network configuration, ensuring pods and containers can communicate and balancing traffic among multiple pod replicas.",
          "correctAnswer": 0
        },
        {
          "question": "In the Docker client-server model, which component performs the actual tasks of building, running, and distributing containers?",
          "options": [
            "Docker Compose",
            "Docker daemon",
            "Docker registry",
            "Docker Desktop"
          ],
          "explanation": "The Docker daemon (dockerd) listens for Docker API requests and executes container-related tasks such as pulling images, starting containers, and managing networks.",
          "correctAnswer": 1
        },
        {
          "question": "Which maintenance strategy focuses on preventing failures by performing periodic, scheduled maintenance based on worst-case lifetimes?",
          "options": [
            "Reactive maintenance",
            "Preventive (planned) maintenance",
            "Condition-based maintenance",
            "Predictive maintenance"
          ],
          "explanation": "Preventive (or planned) maintenance replaces or services parts at regular intervals, rather than relying on sensor data or sophisticated failure predictions.",
          "correctAnswer": 1
        },
        {
          "question": "In a predictive maintenance workflow, which step involves removing duplicates, dealing with missing values, and handling outliers before modeling?",
          "options": [
            "Define the problem",
            "Prepare the data",
            "Analyse the data",
            "Monitor performance"
          ],
          "explanation": "Data preparation (or cleaning) ensures data quality by addressing duplicates, missing values, and outliers prior to analysis or model training.",
          "correctAnswer": 1
        },
        {
          "question": "Which of the following is an advantage of using LSTM (Long Short-Term Memory) networks for predictive maintenance?",
          "options": [
            "LSTMs require less data than traditional models",
            "LSTMs cannot handle time-dependent sequences",
            "LSTMs remember long-term patterns in sensor data",
            "LSTMs only work for image recognition tasks"
          ],
          "explanation": "LSTM networks are a type of recurrent neural network designed to capture long-range dependencies, making them well-suited for time-series data in predictive maintenance.",
          "correctAnswer": 2
        },
        {
          "question": "Which statement best describes Azure Time Series Insights in the context of IoT data?",
          "options": [
            "A serverless compute platform for deploying Docker containers",
            "A PaaS offering that ingests, stores, and visualizes large volumes of time-series data from IoT devices",
            "A virtualization hypervisor for running multiple operating systems",
            "A CPU-only compute service for training complex deep learning models"
          ],
          "explanation": "Azure TSI provides ingestion, modeling, and visualization of IoT time-series data, supporting analytics and integration with other Azure services.",
          "correctAnswer": 1
        },
        {
          "question": "In Kubernetes, which component assigns pods to nodes?",
          "options": [
            "Scheduler",
            "API Server",
            "Controller Manager",
            "Kubelet"
          ],
          "explanation": "The Scheduler assigns pods to nodes by selecting the most appropriate node based on resource availability and other constraints.",
          "correctAnswer": 0
        },
        {
          "question": "What is the primary advantage of Recurrent Neural Networks (RNNs), including LSTMs, over Convolutional Neural Networks (CNNs) in time-series applications?",
          "options": [
            "RNNs are better at extracting spatial features.",
            "RNNs require less data preprocessing compared to CNNs.",
            "RNNs focus on feature extraction rather than sequence mapping.",
            "RNNs add native support for sequential data and temporal dependencies."
          ],
          "explanation": "RNNs (including LSTMs) inherently capture temporal dependencies in sequential data, which is crucial for time-series applications.",
          "correctAnswer": 3
        }
      
    ],
    week5: [
      
        {
          "question": "What is the primary role of the experience replay pool in the CERAI algorithm?",
          "options": [
            "To store completed tasks for analysis after training.",
            "To directly update the Actor and Critic networks after each action.",
            "To store state transition tuples for sampling during gradient descent.",
            "To track resource allocation history across multiple iterations."
          ],
          "explanation": "The experience replay pool stores state transition tuples that are later sampled for gradient descent updates, which helps break correlations in training data.",
          "correctAnswer": 2
        },
        {
          "question": "In the DDPG-based resource allocation algorithm, what action does the Actor main network perform?",
          "options": [
            "It selects an action based on the state and random noise.",
            "It calculates the reward for the Critic network.",
            "It directly updates the allocation record H.",
            "It computes the next state for the edge node."
          ],
          "explanation": "The Actor main network uses the current state plus added random noise to select an action for exploration.",
          "correctAnswer": 0
        },
        {
          "question": "How is the cost of collaborative cloud-edge computing calculated in a public cloud environment?",
          "options": [
            "Based solely on the on-demand instance cost.",
            "By considering only the computing cost of cloud nodes.",
            "By adding the cost of cloud instances (on-demand, reserved, and spot) and the edge node.",
            "By averaging the costs of edge and cloud nodes."
          ],
          "explanation": "In a public cloud setup, the total cost is calculated by summing the costs of various cloud instance types (on-demand, reserved, spot) together with the edge node's cost.",
          "correctAnswer": 2
        },
        {
          "question": "What is the role of the Critic network in the Deep Deterministic Policy Gradient (DDPG) algorithm?",
          "options": [
            "To directly perform actions based on the policy.",
            "To generate resource allocation policies independently.",
            "To store experience in the replay pool.",
            "To evaluate the Actor's performance using a value function."
          ],
          "explanation": "The Critic network evaluates the Actor's performance by estimating the value function, which guides the Actor's policy updates.",
          "correctAnswer": 3
        },
        {
          "question": "What is the main goal of the resource allocation algorithms in cloud-edge computing?",
          "options": [
            "To maximize the number of VMs allocated",
            "To minimize the long-term cost of the system",
            "To increase the computing time duration",
            "To maximize the reward function"
          ],
          "explanation": "The goal is to minimize the long-term cost of the system over the T time slots by minimizing the sum of the costs over all time slots.",
          "correctAnswer": 1
        },
        {
          "question": "What are Availability Zones in AWS?",
          "options": [
            "Geographic areas where AWS services are available",
            "Multiple isolated locations/data centers within a region",
            "Edge locations to deliver content to end users",
            "Virtual networks defined by customers"
          ],
          "explanation": "Availability Zones are defined as multiple isolated locations/data centers within a region.",
          "correctAnswer": 1
        },
        {
          "question": "What is the main difference between PAMDP and MDP?",
          "options": [
            "PAMDP has a different reward function",
            "PAMDP uses a finite set of parameterized actions",
            "PAMDP doesn't use neural networks",
            "PAMDP is only used for private cloud environments"
          ],
          "explanation": "The difference with the Markov decision process is that A is the finite set of parameterized actions in PAMDP.",
          "correctAnswer": 1
        },
        {
          "question": "What does the Deep Deterministic Policy Gradient (DDPG) algorithm involve?",
          "options": [
            "Only Actor networks.",
            "Only Critic networks.",
            "Both Actor and Critic networks.",
            "Neither Actor nor Critic networks."
          ],
          "explanation": "DDPG involves both Actor and Critic networks to guide the decision-making process in resource allocation.",
          "correctAnswer": 2
        },
        {
          "question": "What is the purpose of the experience replay pool in DDPG?",
          "options": [
            "To store allocation records.",
            "To sample experiences for training the networks.",
            "To manage cloud costs.",
            "To predict user demand."
          ],
          "explanation": "The experience replay pool is used to sample experiences for updating the Actor and Critic networks during training.",
          "correctAnswer": 1
        },
        {
          "question": "What is the Markov Decision Process (MDP) used for in resource allocation?",
          "options": [
            "To model sequential decision-making problems.",
            "To predict user demand.",
            "To manage cloud costs.",
            "To optimize edge node performance."
          ],
          "explanation": "MDP is used to model the resource allocation problem as a sequential decision-making process",
          "correctAnswer": 0
        }
      
    ],
    week6: [
      
        {
          "question": "What happens in a non-FIFO message queue?",
          "options": [
            "Messages are processed in the order they are added",
            "Messages are processed randomly",
            "Messages are deleted before being processed",
            "Messages are queued indefinitely"
          ],
          "explanation": "In a non-FIFO (First-In-First-Out) message queue, messages are not processed in the order they are added; instead, they may be processed randomly or based on priority.",
          "correctAnswer": 1
        },
        {
          "question": "Match the following properties with appropriate statements: Properties: X: Consistency, Y: Partition-tolerance, Z: Availability",
          "options": [
            "X-1, Y-2, Z-3",
            "X-3, Y-2, Z-1",
            "X-1, Y-3, Z-2",
            "X-3, Y-1, Z-2"
          ],
          "explanation": "Consistency (X) ensures all nodes see the same data (1), Partition-tolerance (Y) ensures the system works despite network partitions (3), and Availability (Z) ensures operations return quickly (2).",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following conditions must be satisfied for a global state to be consistent?",
          "options": [
            "Messages sent after recording the state must be included in the snapshot.",
            "Messages received after recording the state must be excluded from the snapshot.",
            "Messages received by a process must have been sent before the snapshot was recorded.",
            "Messages sent and received after the snapshot is recorded must be included in the snapshot."
          ],
          "explanation": "A consistent global state ensures that only messages sent before the snapshot are included in the recorded state.",
          "correctAnswer": 2
        },
        {
          "question": "What is the primary role of the marker in the Chandy-Lamport algorithm?",
          "options": [
            "To separate messages included in the snapshot from those that are not.",
            "To identify all incoming messages for a process.",
            "To record the state of a process at a specific time.",
            "To terminate the distributed snapshot algorithm."
          ],
          "explanation": "The marker helps distinguish between messages that should be included in the snapshot and those that should not.",
          "correctAnswer": 0
        },
        {
          "question": "What does the total system cost in a cloud-edge computing environment consist of?",
          "options": [
            "Only the computation cost of service nodes",
            "Only the communication cost of network connections",
            "Both the computation cost of service nodes and the communication cost of network connections",
            "The sum of computation cost, communication cost, and storage cost"
          ],
          "explanation": "The total system cost in a cloud-edge computing environment includes both the computation cost (processing tasks on service nodes) and the communication cost (transmitting data over network connections). These two components are critical for optimizing workload distribution and minimizing overall costs. Storage cost is not typically considered a primary component of the total system cost in this context.",
          "correctAnswer": 2
        },
        {
          "question": "When tasks are offloaded to a local edge node, the end-to-end service time latency is determined by the sum of which two delays?",
          "options": [
            "Data transmission delay and queuing delay",
            "Network delay and computational delay",
            "Communication delay and storage delay",
            "Scheduling delay and execution delay"
          ],
          "explanation": "End-to-end latency is primarily influenced by network delay (communication) and computational delay (processing).",
          "correctAnswer": 1
        },
        {
          "question": "In the joint LSTM and deep reinforcement learning model for task offloading, what role does the threshold value in LSTM prediction serve?",
          "options": [
            "It sets the maximum processing capacity of the edge server.",
            "It decides the communication protocol for task offloading.",
            "It balances prediction accuracy and overhead by determining if the predicted task parameters are acceptable.",
            "It chooses between local execution and offloading based solely on energy consumption."
          ],
          "explanation": "The threshold value ensures that the predicted task parameters are reliable and acceptable for decision-making.",
          "correctAnswer": 2
        },
        {
          "question": "What is the main objective of the DRL algorithm in the context of task offloading based on LSTM prediction?",
          "options": [
            "To minimize the number of offloaded tasks",
            "To increase energy consumption for faster processing",
            "To maximize the total long-term reward by optimizing task scheduling decisions (balancing delay, energy, and task drop rate).",
            "To determine the physical location of IoT devices"
          ],
          "explanation": "The DRL algorithm aims to optimize task scheduling by balancing delay, energy, and task drop rate for long-term rewards.",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following best describes horizontal offloading in a cloud-edge computing environment?",
          "options": [
            "Transferring workloads from edge nodes to the cloud",
            "Transferring tasks between edge nodes to balance load and reduce latency",
            "Offloading tasks from mobile devices to a nearby cloudlet",
            "Moving computation from a central data center to a remote cloud"
          ],
          "explanation": "Horizontal offloading involves distributing tasks among edge nodes to optimize load and latency.",
          "correctAnswer": 1
        },
        {
          "question": "In the Chandy-Lamport algorithm for recording a global snapshot in distributed systems, what is the primary purpose of the marker message?",
          "options": [
            "To trigger the execution of local processes",
            "To reset the state of the distributed system",
            "To separate messages that should be included in the snapshot from those that should not",
            "To confirm the termination of the distributed computation"
          ],
          "explanation": "The marker message helps distinguish between messages that belong to the snapshot and those that do not.",
          "correctAnswer": 2
        }
      
    ],
    week7: [
      
        {
          "question": "Which of the following best describes Spark Streaming?",
          "options": [
            "A real time stream processing framework that uses micro batches",
            "A traditional batch processing engine",
            "A relational database system",
            "A machine learning library"
          ],
          "explanation": "Spark Streaming is designed for real-time data processing but operates by dividing incoming data streams into small, discrete batches (micro-batches). This approach allows it to apply the same programming model and execution engine used for batch processing to streaming workloads, enabling unified processing across batch and streaming applications.",
          "correctAnswer": 0
        },
        {
          "question": "In Spark Streaming, what is a DStream?",
          "options": [
            "A static dataset stored on disk",
            "A sequence of RDDs representing a continuous data stream",
            "A batch file processing tool",
            "A database connector"
          ],
          "explanation": "DStream (Discretized Stream) is the fundamental abstraction in Spark Streaming. It represents a continuous data stream as a series of Resilient Distributed Datasets (RDDs), where each RDD contains data from a specific time interval. This abstraction allows developers to apply transformations and actions to streaming data using the same operations available for batch processing.",
          "correctAnswer": 1
        },
        {
          "question": "What is a major limitation of traditional stream processing systems?",
          "options": [
            "Lack of integration with batch processing",
            "Inability to process large data streams",
            "High processing latencies",
            "Limited support for machine learning queries"
          ],
          "explanation": "Before unified frameworks like Spark, organizations typically maintained separate systems for batch and stream processing. This separation created significant challenges including duplicate code bases, different deployment infrastructures, separate teams managing each system, and difficulty combining historical (batch) analysis with real-time insights.",
          "correctAnswer": 0
        },
        {
          "question": "In Kafka's architecture, which component is responsible for storing, replicating, and delivering messages?",
          "options": [
            "Producers",
            "Brokers",
            "Consumers",
            "Topics"
          ],
          "explanation": "Kafka brokers are the server instances that form the Kafka cluster. They're responsible for persisting and replicating the published messages, maintaining partitioned logs, handling requests from producers and consumers, and managing fault tolerance through replication across multiple broker nodes.",
          "correctAnswer": 1
        },
        {
          "question": "Which communication pattern does MQTT primarily use?",
          "options": [
            "Request/response",
            "Publish/subscribe",
            "Peer-to-peer",
            "Client polling"
          ],
          "explanation": "MQTT (Message Queuing Telemetry Transport) is built around the publish/subscribe messaging pattern. This enables many-to-many communication where clients publish messages to topics, and subscribers receive all messages published to topics they've subscribed to. This decoupling is particularly efficient for IoT devices with limited resources and unreliable network connections.",
          "correctAnswer": 1
        },
        {
          "question": "What is a major advantage of edge data centers compared to centralized data centers?",
          "options": [
            "They increase latency due to remote processing",
            "They provide lower latency by processing data closer to the source",
            "They require more bandwidth for data transmission",
            "They centralize all processing in one location"
          ],
          "explanation": "Edge data centers process data close to where it's generated rather than sending everything to centralized cloud facilities. This proximity significantly reduces latency, which is critical for time-sensitive applications like autonomous vehicles, industrial automation, and augmented reality. It also reduces bandwidth requirements and costs by filtering and processing data locally.",
          "correctAnswer": 1
        },
        {
          "question": "According to the CAP theorem, what trade-off must distributed systems make during a network partition?",
          "options": [
            "They can guarantee both consistency and availability",
            "They must choose between consistency and availability",
            "They can ignore partition tolerance",
            "They only need to focus on scalability"
          ],
          "explanation": "The CAP theorem states that during a network partition (when communication between nodes is unreliable), a distributed system can maintain either consistency (all nodes see the same data at the same time) or availability (every request receives a response), but not both simultaneously. System designers must prioritize which property is more important for their specific use case.",
          "correctAnswer": 1
        },
        {
          "question": "In Cassandra, which consistency level requires a majority of replicas to respond?",
          "options": [
            "ONE",
            "ANY",
            "ALL",
            "QUORUM"
          ],
          "explanation": "The QUORUM consistency level in Cassandra requires responses from a majority of replica nodes (more than half). This provides a balance between strong consistency and availability, ensuring data is read from or written to enough replicas to maintain consistency without requiring responses from all replicas, which would impact availability during node failures.",
          "correctAnswer": 3
        },
        {
          "question": "What is the primary function of a Bloom filter in Cassandra?",
          "options": [
            "Encrypting data on disk",
            "Quickly determining if a key might exist in an SSTable",
            "Replicating data across multiple nodes",
            "Compressing log files"
          ],
          "explanation": "Bloom filters in Cassandra are probabilistic data structures that allow for efficient lookups by quickly determining if a key definitely does not exist in an SSTable (preventing unnecessary disk I/O) or might exist (requiring an actual disk lookup). This optimization significantly improves read performance by reducing disk accesses for non-existent keys.",
          "correctAnswer": 1
        },
        {
          "question": "Which statement best characterizes a key value store in the context of IoT edge storage?",
          "options": [
            "It is a distributed, schema less storage system optimized for fast lookups using keys",
            "It is a relational database designed for complex joins",
            "It is a file system for storing unstructured data without indexing",
            "It is a batch processing engine for big data analytics"
          ],
          "explanation": "Key-value stores are ideal for IoT edge deployments because they provide high-performance, low-latency access to data using simple key-based lookups. Their schema-less nature accommodates diverse IoT data formats without requiring predefined schemas, while their distributed architecture supports horizontal scaling and resilience needed for edge computing environments with limited resources.",
          "correctAnswer": 0
        }
      
    ],
    week8: [
      
        {
          "question": "Which AWS IoT layer is responsible for registering and managing devices?",
          "options": [
            "Things",
            "Cloud",
            "Intelligence",
            "Device Shadow"
          ],
          "explanation": "AWS IoT Core, a component of the Cloud layer, manages device registration and communication.",
          "correctAnswer": 1
        },
        {
          "question": "AWS Greengrass primarily provides what capability at the edge?",
          "options": [
            "Device registration",
            "Bulk device onboarding",
            "Local processing and inference",
            "Device security audit"
          ],
          "explanation": "Greengrass enables devices to process data and perform machine learning inference locally.",
          "correctAnswer": 2
        },
        {
          "question": "Which AWS IoT component serves as a digital identity or twin of a physical device?",
          "options": [
            "Rules Engine",
            "Device Shadow",
            "Device Gateway",
            "Device Registry"
          ],
          "explanation": "Device Shadow maintains a synchronized digital representation of a physical device.",
          "correctAnswer": 1
        },
        {
          "question": "Which communication protocols does AWS IoT Core predominantly use?",
          "options": [
            "MQTT and HTTP",
            "FTP and SMTP",
            "SSH and TCP",
            "UDP and RTP"
          ],
          "explanation": "AWS IoT Core uses MQTT WebSockets and HTTP for message communication.",
          "correctAnswer": 0
        },
        {
          "question": "In AWS IoT architecture, what role does AWS IoT Device Defender primarily fulfil?",
          "options": [
            "Device management",
            "Data analytics",
            "Security monitoring and alerts",
            "Device shadow synchronization"
          ],
          "explanation": "Device Defender identifies and alerts on configuration and security anomalies.",
          "correctAnswer": 2
        },
        {
          "question": "In the federated learning approach, what primarily differentiates it from traditional machine learning?",
          "options": [
            "Centralized data processing",
            "Decentralized model training",
            "Use of supervised learning only",
            "High-speed internet dependency"
          ],
          "explanation": "Federated learning involves training ML models across multiple decentralized nodes without centralized data pooling.",
          "correctAnswer": 1
        },
        {
          "question": "What key challenge is associated with federated learning due to non-IID data distribution?",
          "options": [
            "Higher accuracy",
            "Easier computation",
            "Client drift",
            "Reduced data privacy"
          ],
          "explanation": "Client drift occurs because models trained locally might diverge significantly due to non-IID data.",
          "correctAnswer": 2
        },
        {
          "question": "Autonomous vehicles require edge computing primarily because:",
          "options": [
            "It is cheaper than cloud computing.",
            "It provides faster real-time processing.",
            "It has unlimited storage.",
            "It is easier to deploy globally."
          ],
          "explanation": "Edge computing provides real-time processing necessary for quick decision-making in autonomous vehicles.",
          "correctAnswer": 1
        },
        {
          "question": "What is the primary role of the Lambda functions in AWS Greengrass?",
          "options": [
            "Managing network security",
            "Facilitating device-to-device communication",
            "Running local compute tasks triggered by events",
            "Registering devices in the cloud"
          ],
          "explanation": "Lambda functions enable local execution of tasks based on defined triggers and events.",
          "correctAnswer": 2
        },
        {
          "question": "Which sensor data is commonly used in autonomous vehicles to provide detailed 3D representations of surroundings?",
          "options": [
            "Camera",
            "Radar",
            "Lidar",
            "Ultrasonic"
          ],
          "explanation": "Lidar sensors provide high-frequency signals ideal for detailed 3D environmental mapping in autonomous vehicles.",
          "correctAnswer": 2
        }
      
    ],
    assignment: [
      
        {
          "question": "Which of the following is a building block of edge computing?",
          "options": [
            "Data ingestion and stream processing",
            "Centralized data centers",
            "High-bandwidth CDN",
            "Traditional three-tier architecture"
          ],
          "explanation": "Edge computing requires efficient data ingestion (e.g., using Kafka) and stream processing for real-time data analysis. These are key building blocks for processing data at the edge, as opposed to sending data to the cloud for processing.",
          "correctAnswer": 0
        },
        {
          "question": "What is the primary advantage of edge computing compared to traditional cloud computing?",
          "options": [
            "Increased storage capacity",
            "Reduced latency by avoiding round-trips to the cloud",
            "Better hardware virtualization",
            "More centralized control over resources"
          ],
          "explanation": "Edge computing reduces latency by processing data closer to the source (devices/sensors) rather than sending it to remote cloud data centers and waiting for a response. This avoids round-trip delays that are problematic for time-sensitive applications.",
          "correctAnswer": 1
        },
        {
          "question": "In the edge computing three-tier architecture, what are the three tiers?",
          "options": [
            "Frontend, middleware, and backend",
            "Data, application, and presentation",
            "Data Source, Intelligence, and Actionable Insight",
            "Client, server, and database"
          ],
          "explanation": "The edge computing three-tier architecture consists of the Data Source tier (origin of data from devices/sensors), Intelligence tier (ML models running across cloud and edge), and Actionable Insight tier (alerts, dashboards, automated actions).",
          "correctAnswer": 2
        },
        {
          "question": "How does edge computing handle machine learning compared to traditional cloud computing?",
          "options": [
            "ML is not possible in edge computing environments",
            "Both training and inference happen exclusively on the edge",
            "Training typically happens in the cloud while inference runs on the edge",
            "All ML workloads are shifted to the cloud"
          ],
          "explanation": "In the edge-cloud architecture for ML, training of models typically happens in the cloud (which has more computational resources) while inference (running the trained models) happens on the edge to reduce latency and enable operation in offline scenarios.",
          "correctAnswer": 2
        },
        {
          "question": "Which statement best describes how edge computing relates to data sovereignty?",
          "options": [
            "Edge computing makes data sovereignty irrelevant",
            "Edge computing brings data sovereignty by keeping data where it actually belongs",
            "Edge computing requires all data to be processed in the cloud",
            "Edge computing centralizes all data processing"
          ],
          "explanation": "Edge computing enhances data sovereignty by enabling data to remain where it belongs (e.g., sensitive healthcare data staying within hospital premises) while still allowing processing and analysis to occur locally without sending it to remote cloud servers.",
          "correctAnswer": 1
        },
        {
          "question": "What challenge of IoT-PaaS led to the development of edge computing?",
          "options": [
            "Excessive data storage costs",
            "Lack of processing capabilities",
            "Long round-trip latency from devices to cloud and back",
            "Limited programming interfaces"
          ],
          "explanation": "A key challenge with IoT-PaaS was the long round-trip latency from sending data from devices to the cloud and waiting for results to come back. This was unacceptable for mission-critical industrial IoT scenarios, leading to edge computing where data could be processed locally.",
          "correctAnswer": 2
        },
        {
          "question": "Which of the following best describes the evolution of cloud computing?",
          "options": [
            "Cloud → IoT → Edge → ML",
            "ML → Edge → IoT → Cloud",
            "IoT → Cloud → Edge → ML",
            "Edge → Cloud → IoT → ML"
          ],
          "explanation": "The evolution of cloud computing progressed from traditional cloud (centralized VMs and storage) to IoT (connecting devices to cloud) to Edge (bringing compute closer to data sources) to ML at the edge (running trained models locally).",
          "correctAnswer": 0
        },
        {
          "question": "Which of the following is NOT a building block of edge computing?",
          "options": [
            "Function as a Service",
            "M2M Brokers",
            "Hypervisor management layer",
            "NoSQL/Time-Series Database"
          ],
          "explanation": "The hypervisor management layer is not listed as a building block of edge computing. Edge computing building blocks include Data Ingestion, M2M Brokers, Object Storage, Function as a Service, NoSQL/Time-Series Database, Stream Processing, and ML Models.",
          "correctAnswer": 2
        },
        {
          "question": "In the context of edge computing, where does 'inferencing' typically occur?",
          "options": [
            "Only in the cloud",
            "Only at the data center",
            "At the edge",
            "Only at the data source"
          ],
          "explanation": "In the edge computing paradigm, inferencing (running trained ML models to make predictions or decisions) typically occurs at the edge, closer to the data sources, while training of models usually happens in the cloud.",
          "correctAnswer": 2
        },
        {
          "question": "What is the relationship between edge computing and content delivery networks (CDNs)?",
          "options": [
            "They are the same thing",
            "CDNs have replaced edge computing",
            "Edge computing is a subset of CDN technology",
            "CDNs complement cloud storage but are different from the edge computing concept"
          ],
          "explanation": "While both involve distributed infrastructure, CDNs primarily cache content closer to users for faster delivery, whereas edge computing involves actual computation and processing of data closer to sources. The notes clarify that CDN 'edge' is not the same as the edge computing concept being discussed.",
          "correctAnswer": 3
        },

        
  {
    "question": "What is a primary reason for deploying machine learning at the edge rather than in the cloud?",
    "options": [
      "More storage capacity",
      "Reduced latency and faster response time",
      "Better model training capabilities",
      "Higher computational power"
    ],
    "explanation": "Edge ML reduces latency by processing data locally (at the device level) rather than sending data to remote cloud servers and waiting for responses. This enables real-time responses which are critical for many IoT applications such as industrial control systems and autonomous vehicles.",
    "correctAnswer": 1
  },
  {
    "question": "Which of the following is NOT an advantage of Edge ML?",
    "options": [
      "Real-time analytics",
      "Enhanced model training capacity",
      "Improved data security",
      "Reduced bandwidth requirements"
    ],
    "explanation": "Edge ML typically handles inference (running trained models) rather than training, which still often occurs in the cloud due to the computational resources required. The other options are actual advantages: real-time analytics occurs by processing data locally, data security improves by keeping sensitive data local, and bandwidth requirements decrease by only sending processed/filtered data to the cloud.",
    "correctAnswer": 1
  },
  {
    "question": "Which three essential capabilities does the edge layer deliver for IoT applications?",
    "options": [
      "Local data processing, filtered data transfer to cloud, and faster decision-making",
      "Model training, cloud storage, and centralized data analysis",
      "Device coordination, network security, and data archiving",
      "System administration, user authentication, and batch processing"
    ],
    "explanation": "The edge layer delivers three essential capabilities: (1) local data processing to handle increasing amounts of data from sensors, (2) filtered data transfer to cloud which saves bandwidth and cloud storage costs, and (3) faster decision-making by deploying ML models trained in the cloud at the edge for inference.",
    "correctAnswer": 0
  },
  {
    "question": "What is a significant challenge that specialized processors like GPUs address in edge computing?",
    "options": [
      "Network connectivity issues",
      "Data storage limitations",
      "Speed of ML model inferencing",
      "Battery life of edge devices"
    ],
    "explanation": "Specialized processors like GPUs, NPUs from manufacturers such as Qualcomm, NVIDIA, and ARM are designed to address the performance challenges of running ML models on edge devices. They accelerate inference by taking over complex mathematical calculations needed for running deep learning models, resulting in faster prediction, detection, and classification of data.",
    "correctAnswer": 2
  },
  {
    "question": "In the ML on edge IoT workflow, what occurs after collecting and preparing the training data?",
    "options": [
      "Immediate deployment to edge devices",
      "Data deletion for security purposes",
      "Experimentation with different ML algorithms to build a model",
      "Real-time analytics without model creation"
    ],
    "explanation": "After collecting and preparing training data, the next step in the edge ML workflow is to experiment with different machine learning algorithms and parameters to train models and compare their results. This experimentation phase helps select the best performing model before deployment to edge devices.",
    "correctAnswer": 2
  },
  {
    "question": "Which step in the Azure IoT Edge deployment process involves creating containers for data transformation, insight generation, and action?",
    "options": [
      "Edge Runtime Manifestation",
      "Migrating Workload",
      "Packaging modules as Docker containers",
      "Cloud IoT-Hub configuration"
    ],
    "explanation": "The first step in the Edge ML Platform deployment process is to package the data transform, insight, and action modules as Docker containers. These containers are then pushed to a container registry, targeted for deployment through a workload description, and finally downloaded and run by the IoT edge runtime on the edge device.",
    "correctAnswer": 2
  },
  {
    "question": "Which computer vision model significantly improved object detection speed by introducing the Region Proposal Network (RPN)?",
    "options": [
      "R-CNN",
      "Fast R-CNN",
      "Faster R-CNN",
      "YOLO"
    ],
    "explanation": "Faster R-CNN introduced the Region Proposal Network (RPN) to replace the slow selective search algorithm used in previous models. The RPN is a fast neural network that uses a sliding window approach with anchor boxes to generate region proposals, significantly improving detection speed while maintaining accuracy.",
    "correctAnswer": 2
  },
  {
    "question": "What key advantage does YOLO (You Only Look Once) have over the R-CNN family of algorithms?",
    "options": [
      "Higher accuracy in all scenarios",
      "Better handling of small objects",
      "Significantly faster real-time detection speed",
      "Lower computational requirements"
    ],
    "explanation": "YOLO (You Only Look Once) is known for its significantly faster real-time object detection capabilities (45 frames per second) compared to the R-CNN family. Unlike R-CNN models that apply detection to multiple regions, YOLO processes the entire image just once through the neural network, predicting bounding boxes and class probabilities simultaneously.",
    "correctAnswer": 2
  },
  {
    "question": "What metric evaluates the overlap between a predicted bounding box and the ground truth bounding box in object detection?",
    "options": [
      "Mean Average Precision (mAP)",
      "Intersection Over Union (IOU)",
      "Recall Rate",
      "F1 Score"
    ],
    "explanation": "Intersection Over Union (IOU) is the metric that evaluates the overlap between a predicted bounding box and the ground truth bounding box. It is calculated by dividing the area of intersection by the area of union between the two boxes. IOU is fundamental for determining whether a detection is correct (True Positive) based on a threshold value.",
    "correctAnswer": 1
  },
  {
    "question": "In the context of Azure Custom Vision, what is transfer learning?",
    "options": [
      "Moving data from cloud to edge devices",
      "Applying knowledge gained from solving one problem to a different but related situation",
      "Transferring model ownership between users",
      "Converting models between different programming languages"
    ],
    "explanation": "Transfer learning in Azure Custom Vision (and machine learning generally) refers to applying knowledge gained from solving one problem to a different but related situation. This technique allows the system to leverage pre-trained neural networks and adapt them to new classification tasks with relatively few labeled examples, substantially decreasing the time needed for creating effective models.",
    "correctAnswer": 1
  },
  {
    question: "Which of the following best explains why clock synchronization is important in IoT systems?",
    options: [
      "To improve the battery life of devices",
      "To prevent packet loss during communication",
      "To ensure chronological ordering and coordination of distributed events",
      "To reduce the memory usage of IoT devices"
    ],
    explanation: "Clock synchronization in IoT is crucial for ensuring that sensor events across distributed devices can be chronologically ordered. It also helps in coordinating asynchronous processes and actions, such as actuator commands.",
    correctAnswer: 2
  }
,
{
  question: "What does clock drift refer to in the context of IoT systems?",
  options: [
    "The change in signal strength over time",
    "The difference in the speed at which two clocks tick",
    "A sudden failure in the clock hardware",
    "A delay in sensor event transmission"
  ],
  explanation: "Clock drift is the difference in the frequency of clocks — i.e., how fast or slow they run relative to each other, which causes increasing time differences over time.",
  correctAnswer: 1
}
,
{
  question: "Which of the following best describes clock skew?",
  options: [
    "The incorrect setting of a clock at initialization",
    "The time difference between two clocks at a given instant",
    "A device’s inability to synchronize with the cloud",
    "The inability of two sensors to detect the same event"
  ],
  explanation: "Clock skew refers to the relative time difference between two clocks at a particular moment.",
  correctAnswer: 1
}
,{
  question: "What distinguishes external clock synchronization from internal synchronization in IoT?",
  options: [
    "External uses machine learning while internal does not",
    "External ensures clocks match a global reference, internal focuses on synchronization between devices",
    "Internal works with cloud clocks only, external with edge clocks only",
    "Internal uses atomic clocks, external does not"
  ],
  explanation: "External synchronization ensures clocks align with a global standard like UTC, while internal synchronization keeps clocks in agreement with each other, regardless of external time.",
  correctAnswer: 1
}
,
{
  question: "In Christian’s algorithm for clock synchronization, what is used to estimate the current time at the client?",
  options: [
    "The server’s time minus the round trip delay",
    "The midpoint between sending and receiving a reply",
    "The client’s time incremented by one second",
    "A hash of the server’s clock value"
  ],
  explanation: "Christian’s algorithm sets the client clock to the midpoint of the round-trip interval, assuming symmetric delays.",
  correctAnswer: 1
}
,
{
  question: "In Network Time Protocol (NTP), the offset between client and server clocks is calculated as:",
  options: [
    "(T1 - T2 + T3 - T4) / 2",
    "(T2 - T1 + T4 - T3) / 2",
    "(T1 + T2 + T3 + T4) / 4",
    "(T2 - T4 + T3 - T1) / 2"
  ],
  explanation: "In NTP, the offset is calculated as: (tr1 - tr2 + ts2 - ts1)/2, which is (receive1 - receive2 + send2 - send1)/2.",
  correctAnswer: 1
}
, 
{
  question: "What is the primary purpose of Lamport timestamps in distributed IoT systems?",
  options: [
    "To assign physical time to events",
    "To ensure global time accuracy across all devices",
    "To maintain causal ordering between events",
    "To synchronize hardware-level clocks"
  ],
  explanation: "Lamport timestamps ensure causality by assigning logical clocks to events, not physical time.",
  correctAnswer: 2
}
,
{
  question: "Which of the following is true about vector clocks?",
  options: [
    "They use a single counter for each event",
    "They are only used for error correction",
    "They assign a vector of counters for each process to track causality",
    "They rely on GPS signals for accuracy"
  ],
  explanation: "Vector clocks use a vector of integers, one per process, to track causal relationships between distributed events.",
  correctAnswer: 2
}
,
{
  question: "Which of the following best describes Berkeley’s algorithm for time synchronization?",
  options: [
    "It uses GPS to align all device clocks",
    "A master polls devices and sets their time based on average clock values",
    "Each device adjusts its clock based on NTP messages",
    "It adjusts device clocks based on temperature sensors"
  ],
  explanation: "Berkeley’s algorithm involves a master collecting times from devices, averaging them, and then sending adjustment instructions to synchronize all clocks.",
  correctAnswer: 1
}
,
{
  question: "How can IoT systems avoid physical clock synchronization while still maintaining event ordering?",
  options: [
    "By using higher bandwidth connections",
    "By logging all events in a local database",
    "By assigning logical timestamps like Lamport or vector timestamps",
    "By limiting the number of devices in the network"
  ],
  explanation: "Logical timestamps like Lamport or vector clocks can preserve causal event ordering without requiring synchronized physical clocks.",
  correctAnswer: 2
}
,

  {
    question: "What is the role of the Kubernetes API Server?",
    options: [
      "Scheduling pods to worker nodes",
      "Managing container images",
      "Providing a RESTful interface and cluster state access",
      "Monitoring containers for health"
    ],
    explanation: "The API Server acts as the gateway to the Kubernetes cluster. It is the only component that communicates directly with etcd and provides a RESTful interface to interact with the cluster state.",
    correctAnswer: 2
  },
  {
    question: "Which component is responsible for assigning pods to nodes in Kubernetes?",
    options: [
      "Kubelet",
      "Scheduler",
      "Controller Manager",
      "Kube-proxy"
    ],
    explanation: "The Scheduler watches for newly created pods without assigned nodes and selects a suitable node based on available resources and other constraints.",
    correctAnswer: 1
  },
  {
    question: "Which of the following is NOT a responsibility of kubelet?",
    options: [
      "Registering the node with the API server",
      "Running the pod’s containers",
      "Assigning pods to nodes",
      "Monitoring container status and health"
    ],
    explanation: "Kubelet does many things on the node, but assigning pods to nodes is done by the Kubernetes Scheduler, not the kubelet.",
    correctAnswer: 2
  },
  {
    question: "What is the purpose of the etcd component in Kubernetes?",
    options: [
      "Running container workloads",
      "Storing all cluster data in a key-value format",
      "Routing network traffic",
      "Balancing load between services"
    ],
    explanation: "Etcd is a distributed key-value store used by Kubernetes to persist all cluster state, including pods, nodes, and configurations.",
    correctAnswer: 1
  },
  {
    question: "Which Docker component is responsible for executing commands like `docker run`?",
    options: [
      "Docker Daemon",
      "Docker Hub",
      "Docker Client",
      "Docker Compose"
    ],
    explanation: "The Docker Client issues commands like `docker run`, which are then sent to the Docker Daemon via REST API for execution.",
    correctAnswer: 2
  },
  {
    question: "What is the main function of kube-proxy in a Kubernetes cluster?",
    options: [
      "Assign pods to nodes",
      "Manage persistent volumes",
      "Maintain network rules and handle service networking",
      "Monitor container health"
    ],
    explanation: "Kube-proxy maintains network rules on nodes, allowing communication between pods and handling load balancing for services.",
    correctAnswer: 2
  },
  {
    question: "In Kubernetes, which component is responsible for implementing control loops to maintain the cluster's desired state?",
    options: [
      "Scheduler",
      "Kubelet",
      "Controller Manager",
      "Kube-proxy"
    ],
    explanation: "The Controller Manager runs various controllers that monitor the state of cluster resources and take corrective action to match the desired state.",
    correctAnswer: 2
  },
  {
    question: "Which of the following statements about Docker containers is TRUE?",
    options: [
      "Each container runs a full operating system kernel",
      "Containers are more heavyweight than virtual machines",
      "Containers share the host OS kernel but are isolated",
      "Containers cannot be run outside Kubernetes"
    ],
    explanation: "Containers are lightweight and share the host's OS kernel, unlike VMs. They provide isolated environments but are not full OS instances.",
    correctAnswer: 2
  },
  {
    question: "What does the container runtime do on a Kubernetes node?",
    options: [
      "Schedules the pod to a node",
      "Fetches container images and runs containers",
      "Manages user access policies",
      "Creates services for exposing containers"
    ],
    explanation: "The container runtime is responsible for pulling container images, preparing the environment, and running containers.",
    correctAnswer: 1
  },
  {
    question: "What is the use of a Docker registry like Docker Hub?",
    options: [
      "Runs containers",
      "Manages Docker networks",
      "Stores and distributes container images",
      "Builds Docker images"
    ],
    explanation: "Docker Hub is a registry service where container images are stored and from where they can be pulled for deployment.",
    correctAnswer: 2
  }



      ]
    
  };

  
  // For the "all" mode, combine questions from all weeks
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Function to shuffle options while preserving correct answer
  const shuffleOptions = (question: Question): Question => {
    const originalCorrectOption = question.options[question.correctAnswer];
    
    // Create a new question with shuffled options
    const shuffledOptions = shuffleArray([...question.options]);
    
    // Find the new index of the correct answer
    const newCorrectAnswerIndex = shuffledOptions.findIndex(
      option => option === originalCorrectOption
    );
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswerIndex
    };
  };
  
  // For the "ultimate" challenge mode, combine and randomize questions from all weeks
  if (mode === 'assignment') {
    let allQuestions: Question[] = [];
    // Gather questions from all weeks (excluding assignment)
    for (const week in weekQuestions) {
      if (week !== 'assignment') {
        allQuestions = [...allQuestions, ...weekQuestions[week]];
      }
    }
    // Shuffle all questions and their options
    return shuffleArray(allQuestions).map(q => shuffleOptions(q));
  }
  
  // For the "all" mode, combine questions from all weeks
  if (mode === 'all') {
    let allQuestions: Question[] = [];
    for (const week in weekQuestions) {
      allQuestions = [...allQuestions, ...weekQuestions[week]];
    }
    // Shuffle all questions and their options
    return shuffleArray(allQuestions).map(q => shuffleOptions(q));
  }
  
  // Handle specific week or assignment mode
  if (weekQuestions[mode] && weekQuestions[mode].length > 0) {
    // Return shuffled questions with shuffled options for the specific mode
    return shuffleArray(weekQuestions[mode]).map(q => shuffleOptions(q));
  }
  
  // Fallback - if mode doesn't exist or has no questions
  console.error(`No questions found for mode: ${mode}`);
  
  // Return default questions instead of empty array
  return shuffleArray(weekQuestions.week1 || [
    {
      question: "Default question when no questions are found",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
      explanation: "This is a placeholder question since no questions were found for the selected mode."
    }
  ]).map(q => shuffleOptions(q));
}