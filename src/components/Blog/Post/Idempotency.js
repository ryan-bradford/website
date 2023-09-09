import "./Idempotency.css";

const Idempotency = () => {
    return (
        <div class="container">
            <h6>Idempotency: Fix any mistake automatically!</h6>
            <p>Idempotency is a mathematical property that states that applying a function multiple times will have the same result as applying the function a single. In the simplest case, this means that f(f(x)) = f(x) for every input X. An easy example is the ceiling function. ceil(ceil(x)) = ceil(x) for every number.</p>
            <p>We can also generate a slightly more complicated example, and potentially slightly less accurate example. Let's say we have three functions, f, g, and h. G and H are idempotent. We are then going to define f(x) = g(h(x)). With this set of definitions, we can assert that f(h(x)) = f(x). Let me show how.</p>
            Begin With: <code>f(h(x)) = f(x)</code>
            Replace f(...) with g(h(...)): <code>g(h(h(x))) = f(x)</code>
            Replace h(h(x)) with h(x): <code>g(h(x)) = f(x)</code>
            We have ended with a true statement: <code>g(h(x)) = f(x)</code>
            <p>This last example is where the real benefit of idempotent functions comes from. When you compose idempotent functions, the entire function becomes idempotent and will always result in the same output given the same input.</p>
            <h6>Software Application</h6>
            <p>Idempotency is easily applied to pure functional language concepts. However, it also applies easily to imperative languages. Just instead of the output being the literal return value of the function, think of the output as the system as a whole. Let's run through a quick imperative, idempotent example</p>
            <code>
                class Light:<br></br>
                &nbsp;boolean status = true;<br></br>
                &nbsp;void turnOff:<br></br>
                &nbsp;&nbsp;status = false;<br></br>
                <br></br>


                class House:<br></br>
                &nbsp;Light hallway;<br></br>
                &nbsp;Light bedroom;<br></br>
                &nbsp;Light kitchen;<br></br>
                &nbsp;void turnoffLights:<br></br>
                &nbsp;&nbsp;hallway.turnOff<br></br>
                &nbsp;&nbsp;bedroom.turnOff<br></br>
                &nbsp;&nbsp;kitchen.turnOff<br></br>

            </code>
            <p>Now, this code is quite obvious and nothing genius given all that math above. However, the concept here is unbelievable useful. Let's say some user had already turned off the hallway light. This code would respected that and continued, resulting in the same end state, regardless of the initial state.</p>
            <p>Where Idempotency becomes most useful is when we scale it up to large, complicated systems. Let me run through some benefits, and some examples of those benefits:</p>
            <h6>Benefits</h6>
            <h7>1. Fix customer mistakes</h7>
            <p>One of the benefits of idempotent systems is that fixing customer mistakes becomes a breeze. If a customer is running a process, and screws up part way through (or your system screws up!), there's no need to execute a complicated set of instructions to revert what they've done, or send instructions on how to continue the process from where they left off. They can just run the entire thing again! It's idempotent!</p>
            <p>Concrete Example: Customer Onboarding Flow</p>
            <p>Imagine there's a customer onboarding flow that requires a bulk payload up front. The user provides the payload, and your system goes about creating the records and linking any necessary parts. But oh no! They failed to setup a necessary external account required to link. No fear, our onboarding flow is idempotent. They can simply setup the external account, update their payload to include the correct details, and kick off the flow again. Or if during the onboarding process, the connection to the database is severed. Half of the records have been created, but the process was not finished! No fear, our system is idempotent. The customer can simply click a "retry" button, and our system will pick up where they left off.</p>
            <p></p>
            <h7>2. Fix upgrade issues</h7>
            <p>Another great benefit of Idempotency is that it makes upgrade issues far easier to resolve. If something goes wrong mid-way during an upgrade, no worries! Just re-trigger the entire thing and it will resolve itself.</p>
            <p>Concrete Example: Adding DB Table</p>
            <p>Let's say there's an upgrade that adds a new database table. If you write your query using CREATE TABLE BLAH, this is a non-idempotent query. This will lead to issues if you attempt to re-run this step. However, if you write the upgrade using CREATE TABLE IF NOT EXISTS BLAH, then it becomes idempotent! Now, re-running the upgrade steps should have no negative side-effects. You can also take this one step further, to make creating the table idempotent, and then also creating the set of columns idempotent. Let's say someone messes with the DB and removes a column accidentally. If creating the columns was an idempotent operation, re-running the upgrade would be an easy fix for this issue.</p>
            <h7>3. Retry logic</h7>
            <p>If you can guarantee that your sub-processes are idempotent, adding retry logic becomes much easier. Let's say you're running an operation that interacts with an external file management server. But this server kind of sucks, and has a 10% chance of failing uploads/downloads midway with 503 exceptions. If your code is idempotent, you can simply retry your method on a 503 exception and overcome this flaky infrastructure. If your code isn't idempotent, you'll need to add complicated logic to the retry function to implement the idempotency that the sub-process should have implemented.</p>
            <h7>4. Code clarity</h7>
            <p>The final benefit to idempotent code is that it's very clear to read. The reason for this is because every function becomes responsible for creating a state, rather than performing an action. This is a fairly nuanced difference, but it's important. If you don't focus on creating idempotent processes/functions/methods, when you want to take advantage of the benefits I laid out above, your parent process needs to implement the idempotent logic for the sub-processes. This means checking if an operation is complete before invoking it and adding conditional statements to shortcut completed actions. However, if you write idempotent code, you get the benefits above for free! Any process that composes idempotent processes will automatically become idempotent.</p>
        </div>
    );
};

export default Idempotency;
