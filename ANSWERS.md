- [ ] Why would you use class component over function components (removing hooks from the question)?

    class components allow for the use of State and lifecycle hooks that are features that functional components do not natively posess

- [ ] Name three lifecycle methods and their purposes.

    render: handles the rendering of component to the UI
    componentDidMount: Allows the use of setState, performs action single time immediately after component mounts. Useful for API calls
    componentDidUpdate: invoked in response to an update happening. Useful for changing state in response to a user-prompted change. Beware of infinite loops here

- [ ] What is the purpose of a custom hook?

    Useful for times where you need custom state logic that will be repeated in your code

- [ ] Why is it important to test our apps?

    Automated testing can help locate problems with the user flow of a program, especially as a program starts to be too big to test manually, and as updated may create unintended changes with previously working code.