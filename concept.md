My basic idea for this project is for it to be a "rolling form" - a series of questions presented to the user, where which questions are presented depends on the answers they've given to previous questions. 
For example, users must choose both a class and proficiencies. Each class only has specific proficiencies available as choices, so we'll need to:
- ask users to choose their class
- query the API to discover which proficiency choices are available to that class
- ask the user to choose their proficiencies, making only those options available
For the sake of both clarity and ease, it's probably better for previous questions to remain visible as the user progresses, rather than presenting the questions as a series of separate pages. 

Aside from this functionality, we should try to add whatever helpful widgets we can manage without too much effort, like a UI for distributing points into stats that keeps track of how many points the user has left to spend. 