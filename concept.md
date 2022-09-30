My basic idea for this project is for it to be a "rolling form" - a series of questions presented to the user, where which questions are presented depends on the answers they've given to previous questions. 
For example, users must choose both a class and proficiencies. Each class only has specific proficiencies available as choices, so we'll need to:
- ask users to choose their class
- query the API to discover which proficiency choices are available to that class
- ask the user to choose their proficiencies, making only those options available

We should rely *as much as possible* on the API as our source of information, rather than hard-coding our own knowledge into the app. While unlikely to matter for this specific project, keeping data dynamic is very important. Picture what would happen if WotC adds a new character class. If we hard-coded that information into our app, it won't notice and will be out of date. If we're retrieving that information from the API, it will be updated automatically, without us needing to do anything! Assuming the API is kept up to date, anyway, but that's someone else's job. 

For the sake of both clarity and ease, it's probably better for previous questions to remain visible as the user progresses, rather than presenting the questions as a series of separate pages.

Aside from this functionality, we should try to add whatever helpful widgets we can manage without too much effort, like a UI for distributing points into stats that keeps track of how many points the user has left to spend. We should also display whatever information we easily can even when it has no implications for later questions (like the weapon proficiencies each class gives them). However, because these features fall outside of the Minimum Viable Product, they're a much lower priority. 