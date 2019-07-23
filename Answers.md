# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.


ReactJS is javascript library created by Facebook (which they open sourced) for building user interfaces.

It solves the way we approach working on large apps, by breaking them into cohesive components. This is better for organisation and for working between teams.

React also allows and handles the rendering and updates to the view your user has based on interactions or changes to the apps data.


1. What does it mean to think in react?

To think in react is to break down large apps into smaller cohesive components, which can be combined to make complex UI’s.

1. Describe state.

Components within react can have state which is data. When the state data changes, react will re-render the page to display the update.

1. Describe props.

When components are created, they can be given different parameters, in the form of key:value pairs. When components are invoked then they have access to these parameters as props.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Things like fetching data from an outside api service is an example of a side effect where we are changing the state. In React we have the Effect Hook which allows you to perform side effects on components under certain conditions, for example only once (by declaring an empty array at the end of the hooks conditions) rather than every time the state gets updated (infinitely in the case of fetching data from an api).
