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
        correctAnswer: 3,
      }
    ],
    week4: [
      {
        question: "Which of the following control plane components is the only one that interacts directly with etcd?",
        options: [
          "Controller Manager",
          "API Server",
          "Scheduler",
          "Kubelet"
        ],
        correctAnswer: 1,
      },
      {
        question: "In the context of Kubernetes, orchestration is best described as:",
        options: [
          "Managing and deploying containers across multiple hosts in a fault-tolerant manner",
          "Running local compute jobs on a single node",
          "Using hypervisors to isolate VMs on a single server",
          "Ensuring minimal CPU and memory usage across cloud instances"
        ],
        correctAnswer: 0,
      },
      {
        question: "Which of the following Kubernetes worker node components is primarily responsible for managing pod networking and handling load balancing?",
        options: [
          "kube-proxy (Service proxy)",
          "Scheduler",
          "Container runtime",
          "Kubelet"
        ],
        correctAnswer: 0,
      },
      {
        question: "In the Docker client-server model, which component performs the actual tasks of building, running, and distributing containers?",
        options: [
          "Docker Compose",
          "Docker daemon",
          "Docker registry",
          "Docker Desktop"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which maintenance strategy focuses on preventing failures by performing periodic, scheduled maintenance based on worst-case lifetimes?",
        options: [
          "Reactive maintenance",
          "Preventive (planned) maintenance",
          "Condition-based maintenance",
          "Predictive maintenance"
        ],
        correctAnswer: 1,
      },
      {
        question: "In a predictive maintenance workflow, which step involves removing duplicates, dealing with missing values, and handling outliers before modeling?",
        options: [
          "Define the problem",
          "Prepare the data",
          "Analyse the data",
          "Monitor performance"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is an advantage of using LSTM (Long Short-Term Memory) networks for predictive maintenance?",
        options: [
          "LSTMs require less data than traditional models",
          "LSTMs cannot handle time-dependent sequences",
          "LSTMs remember long-term patterns in sensor data",
          "LSTMs only work for image recognition tasks"
        ],
        correctAnswer: 2,
      },
      {
        question: "Which statement best describes Azure Time Series Insights in the context of IoT data?",
        options: [
          "A serverless compute platform for deploying Docker containers",
          "A PaaS offering that ingests, stores, and visualizes large volumes of time-series data from IoT devices",
          "A virtualization hypervisor for running multiple operating systems",
          "A CPU-only compute service for training complex deep learning models"
        ],
        correctAnswer: 1,
      },
      {
        question: "In Kubernetes, which component assigns pods to nodes?",
        options: [
          "Scheduler",
          "API Server",
          "Controller Manager",
          "Kubelet"
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the primary advantage of Recurrent Neural Networks (RNNs), including LSTMs, over Convolutional Neural Networks (CNNs) in time-series applications?",
        options: [
          "RNNs are better at extracting spatial features.",
          "RNNs require less data preprocessing compared to CNNs.",
          "RNNs focus on feature extraction rather than sequence mapping.",
          "RNNs add native support for sequential data and temporal dependencies."
        ],
        correctAnswer: 3,
      }
    ],
    week5: [
      {
        question: "What is the primary role of the experience replay pool in the CERAI algorithm?",
        options: [
          "To store completed tasks for analysis after training.",
          "To directly update the Actor and Critic networks after each action.",
          "To store state transition tuples for sampling during gradient descent.",
          "To track resource allocation history across multiple iterations."
        ],
        correctAnswer: 2,
      },
      {
        question: "In the DDPG-based resource allocation algorithm, what action does the Actor main network perform?",
        options: [
          "It selects an action based on the state and random noise.",
          "It calculates the reward for the Critic network.",
          "It directly updates the allocation record H.",
          "It computes the next state for the edge node."
        ],
        correctAnswer: 0,
      },
      {
        question: "How is the cost of collaborative cloud-edge computing calculated in a public cloud environment?",
        options: [
          "Based solely on the on-demand instance cost.",
          "By considering only the computing cost of cloud nodes.",
          "By adding the cost of cloud instances (on-demand, reserved, and spot) and the edge node.",
          "By averaging the costs of edge and cloud nodes."
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the role of the Critic network in the Deep Deterministic Policy Gradient (DDPG) algorithm?",
        options: [
          "To directly perform actions based on the policy.",
          "To generate resource allocation policies independently.",
          "To store experience in the replay pool.",
          "To evaluate the Actor's performance using a value function."
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the main goal of the resource allocation algorithms in cloud-edge computing?",
        options: [
          "To maximize the number of VMs allocated",
          "To minimize the long-term cost of the system",
          "To increase the computing time duration",
          "To maximize the reward function"
        ],
        correctAnswer: 1,
      },
      {
        question: "What are Availability Zones in AWS?",
        options: [
          "Geographic areas where AWS services are available",
          "Multiple isolated locations/data centers within a region",
          "Edge locations to deliver content to end users",
          "Virtual networks defined by customers"
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the main difference between PAMDP and MDP?",
        options: [
          "PAMDP has a different reward function",
          "PAMDP uses a finite set of parameterized actions",
          "PAMDP doesn't use neural networks",
          "PAMDP is only used for private cloud environments"
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the Deep Deterministic Policy Gradient (DDPG) algorithm involve?",
        options: [
          "Only Actor networks.",
          "Only Critic networks.",
          "Both Actor and Critic networks.",
          "Neither Actor nor Critic networks."
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of the experience replay pool in DDPG?",
        options: [
          "To store allocation records.",
          "To sample experiences for training the networks.",
          "To manage cloud costs.",
          "To predict user demand."
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the Markov Decision Process (MDP) used for in resource allocation?",
        options: [
          "To model sequential decision-making problems.",
          "To predict user demand.",
          "To manage cloud costs.",
          "To optimize edge node performance."
        ],
        correctAnswer: 0,
      }
    ],
    week6: [
      {
        question: "What happens in a non-FIFO message queue?",
        options: [
          "Messages are processed in the order they are added",
          "Messages are processed randomly",
          "Messages are deleted before being processed",
          "Messages are queued indefinitely"
        ],
        correctAnswer: 1,
      },
      {
        question: "Match the following properties with appropriate statements: Properties: X: Consistency, Y: Partition-tolerance, Z: Availability",
        options: [
          "X-1, Y-2, Z-3",
          "X-3, Y-2, Z-1",
          "X-1, Y-3, Z-2",
          "X-3, Y-1, Z-2"
        ],
        correctAnswer: 2,
      },
      {
        question: "Which of the following conditions must be satisfied for a global state to be consistent?",
        options: [
          "Messages sent after recording the state must be included in the snapshot.",
          "Messages received after recording the state must be excluded from the snapshot.",
          "Messages received by a process must have been sent before the snapshot was recorded.",
          "Messages sent and received after the snapshot is recorded must be included in the snapshot."
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the primary role of the marker in the Chandy-Lamport algorithm?",
        options: [
          "To separate messages included in the snapshot from those that are not.",
          "To identify all incoming messages for a process.",
          "To record the state of a process at a specific time.",
          "To terminate the distributed snapshot algorithm."
        ],
        correctAnswer: 0,
      },
      {
        question: "What does the total system cost in a cloud-edge computing environment consist of?",
        options: [
          "Only the computation cost of service nodes",
          "Only the communication cost of network connections",
          "Both the computation cost of service nodes and the communication cost of network connections",
          "The sum of computation cost, communication cost, and storage cost"
        ],
        correctAnswer: 2,
      },
      {
        question: "When tasks are offloaded to a local edge node, the end-to-end service time latency is determined by the sum of which two delays?",
        options: [
          "Data transmission delay and queuing delay",
          "Network delay and computational delay",
          "Communication delay and storage delay",
          "Scheduling delay and execution delay"
        ],
        correctAnswer: 1,
      },
      {
        question: "In the joint LSTM and deep reinforcement learning model for task offloading, what role does the threshold value in LSTM prediction serve?",
        options: [
          "It sets the maximum processing capacity of the edge server.",
          "It decides the communication protocol for task offloading.",
          "It balances prediction accuracy and overhead by determining if the predicted task parameters are acceptable.",
          "It chooses between local execution and offloading based solely on energy consumption."
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the main objective of the DRL algorithm in the context of task offloading based on LSTM prediction?",
        options: [
          "To minimize the number of offloaded tasks",
          "To increase energy consumption for faster processing",
          "To maximize the total long-term reward by optimizing task scheduling decisions (balancing delay, energy, and task drop rate).",
          "To determine the physical location of IoT devices"
        ],
        correctAnswer: 2,
      },
      {
        question: "Which of the following best describes horizontal offloading in a cloud-edge computing environment?",
        options: [
          "Transferring workloads from edge nodes to the cloud",
          "Transferring tasks between edge nodes to balance load and reduce latency",
          "Offloading tasks from mobile devices to a nearby cloudlet",
          "Moving computation from a central data center to a remote cloud"
        ],
        correctAnswer: 1,
      },
      {
        question: "In the Chandy-Lamport algorithm for recording a global snapshot in distributed systems, what is the primary purpose of the marker message?",
        options: [
          "To trigger the execution of local processes",
          "To reset the state of the distributed system",
          "To separate messages that should be included in the snapshot from those that should not",
          "To confirm the termination of the distributed computation"
        ],
        correctAnswer: 2,
      }
    ],
    week7: [
      {
        question: "Which of the following best describes Spark Streaming?",
        options: [
          "A real time stream processing framework that uses micro batches",
          "A traditional batch processing engine",
          "A relational database system",
          "A machine learning library"
        ],
        correctAnswer: 0,
      },
      {
        question: "In Spark Streaming, what is a DStream?",
        options: [
          "A static dataset stored on disk",
          "A sequence of RDDs representing a continuous data stream",
          "A batch file processing tool",
          "A database connector"
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a major limitation of traditional stream processing systems?",
        options: [
          "Lack of integration with batch processing",
          "Inability to process large data streams",
          "High processing latencies",
          "Limited support for machine learning queries"
        ],
        correctAnswer: 0,
      },
      {
        question: "In Kafka's architecture, which component is responsible for storing, replicating, and delivering messages?",
        options: [
          "Producers",
          "Brokers",
          "Consumers",
          "Topics"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which communication pattern does MQTT primarily use?",
        options: [
          "Request/response",
          "Publish/subscribe",
          "Peer-to-peer",
          "Client polling"
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a major advantage of edge data centers compared to centralized data centers?",
        options: [
          "They increase latency due to remote processing",
          "They provide lower latency by processing data closer to the source",
          "They require more bandwidth for data transmission",
          "They centralize all processing in one location"
        ],
        correctAnswer: 1,
      },
      {
        question: "According to the CAP theorem, what trade-off must distributed systems make during a network partition?",
        options: [
          "They can guarantee both consistency and availability",
          "They must choose between consistency and availability",
          "They can ignore partition tolerance",
          "They only need to focus on scalability"
        ],
        correctAnswer: 1,
      },
      {
        question: "In Cassandra, which consistency level requires a majority of replicas to respond?",
        options: [
          "ONE",
          "ANY",
          "ALL",
          "QUORUM"
        ],
        correctAnswer: 3,
      },
      {
        question: "What is the primary function of a Bloom filter in Cassandra?",
        options: [
          "Encrypting data on disk",
          "Quickly determining if a key might exist in an SSTable",
          "Replicating data across multiple nodes",
          "Compressing log files"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which statement best characterizes a key value store in the context of IoT edge storage?",
        options: [
          "It is a distributed, schema less storage system optimized for fast lookups using keys",
          "It is a relational database designed for complex joins",
          "It is a file system for storing unstructured data without indexing",
          "It is a batch processing engine for big data analytics"
        ],
        correctAnswer: 0,
      }
    ],
    week8: [
      {
        question: "Which AWS IoT layer is responsible for registering and managing devices?",
        options: [
          "Things",
          "Cloud",
          "Intelligence",
          "Device Shadow"
        ],
        correctAnswer: 1,
      },
      {
        question: "AWS Greengrass primarily provides what capability at the edge?",
        options: [
          "Device registration",
          "Bulk device onboarding",
          "Local processing and inference",
          "Device security audit"
        ],
        correctAnswer: 2,
      },
      {
        question: "Which AWS IoT component serves as a digital identity or twin of a physical device?",
        options: [
          "Rules Engine",
          "Device Shadow",
          "Device Gateway",
          "Device Registry"
        ],
        correctAnswer: 1,
      },
      {
        question: "Which communication protocols does AWS IoT Core predominantly use?",
        options: [
          "MQTT and HTTP",
          "FTP and SMTP",
          "SSH and TCP",
          "UDP and RTP"
        ],
        correctAnswer: 0,
      },
      {
        question: "In AWS IoT architecture, what role does AWS IoT Device Defender primarily fulfil?",
        options: [
          "Device management",
          "Data analytics",
          "Security monitoring and alerts",
          "Device shadow synchronization"
        ],
        correctAnswer: 2,
      },
      {
        question: "In the federated learning approach, what primarily differentiates it from traditional machine learning?",
        options: [
          "Centralized data processing",
          "Decentralized model training",
          "Use of supervised learning only",
          "High-speed internet dependency"
        ],
        correctAnswer: 1,
      },
      {
        question: "What key challenge is associated with federated learning due to non-IID data distribution?",
        options: [
          "Higher accuracy",
          "Easier computation",
          "Client drift",
          "Reduced data privacy"
        ],
        correctAnswer: 2,
      },
      {
        question: "Autonomous vehicles require edge computing primarily because:",
        options: [
          "It is cheaper than cloud computing.",
          "It provides faster real-time processing.",
          "It has unlimited storage.",
          "It is easier to deploy globally."
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the primary role of the Lambda functions in AWS Greengrass?",
        options: [
          "Managing network security",
          "Facilitating device-to-device communication",
          "Running local compute tasks triggered by events",
          "Registering devices in the cloud"
        ],
        correctAnswer: 2,
      },
      {
        question: "Which sensor data is commonly used in autonomous vehicles to provide detailed 3D representations of surroundings?",
        options: [
          "Camera",
          "Radar",
          "Lidar",
          "Ultrasonic"
        ],
        correctAnswer: 2,
      }
    ]
  };
  
  // For the "all" mode, combine questions from all weeks
  if (mode === 'all') {
    let allQuestions: Question[] = [];
    for (const week in weekQuestions) {
      allQuestions = [...allQuestions, ...weekQuestions[week]];
    }
    return allQuestions;
  }
  
  // Handle specific week or assignment mode
  if (weekQuestions[mode] && weekQuestions[mode].length > 0) {
    return weekQuestions[mode];
  }
  
  // Fallback - if mode doesn't exist or has no questions
  console.error(`No questions found for mode: ${mode}`);
  
  // Return default questions instead of empty array
  return weekQuestions.week1 || [
    {
      question: "Default question when no questions are found",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
      explanation: "This is a placeholder question since no questions were found for the selected mode."
    }
  ];
}