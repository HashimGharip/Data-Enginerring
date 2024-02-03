# What is Orchestration? 

- it the configuration of multiple tasks some may be automated into one complete end-to-end process or job.
- Orchestration is the coordination and management of multiple computer systems, applications and/or services,
 stringing together multiple tasks in order to execute a larger workflow or process. 
 These processes can consist of multiple tasks that are automated and can involve multiple systems.

-The goal of orchestration is to streamline and optimize the execution of frequent, repeatable processes and thus to help data teams more easily manage complex tasks and workflows. Anytime a process is repeatable, and its tasks can be automated, orchestration can be used to save time, increase efficiency, and eliminate redundancies


# What is Mage?

- An open-source pipeline tool for orchestrating, transforming, and integrating data
- every MAGE instance contains one project or more ,every project contains one pipelines or more ,every pipeline contains one block or more .

- Projects:-
A project forms the basis for all the work you can do in Mage— you can think of it like a GitHub repo. 
It contains the code for all of your pipelines, blocks, and other assets.
A Mage instance has one or more projects

- Pipelines:-
A pipeline is a workflow that executes some data operation— maybe extracting, transforming, and loading data from an API. They’re also called DAGs on other platforms
In Mage, pipelines can contain Blocks (written in SQL, Python, or R) and charts. 
Each pipeline is represented by a YAML file in the “pipelines” folder of your project.


- Blocks:-
A block is a file that can be executed independently or within a pipeline. 
Together, blocks form Directed Acyclic Graphs (DAGs), which we call pipelines. 
A block won’t start running in a pipeline until all its upstream dependencies are met.
Blocks are reusable, atomic pieces of code that perform certain actions. 
Changing one block will change it everywhere it’s used, but don’t worry, it’s easy to detach blocks to separate instances if necessary.
Blocks can be used to perform a variety of actions, from simple data transformations to complex machine learning models. 


