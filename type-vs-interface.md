<h1 style="text-align: center;">Type Alias vs Interface in TypeScript: Key Differences and When to Use Them</h1>

<h3>Introduction:</h3>
<p>In TypeScript, type aliases and interface are both used to describe
the shape of data. They often look similar, especially when we use them
for objects. However, they have some important differences.
Understanding these differences helps us write clear and maintainable
code.</p>



<h3>Detailed Explanation:</h3>
<p>An interface is mainly used to describe the structure of an object. It
can also extend another interface using the extends keyword.</p>

interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

<p>Here, Admin gets the name and age properties from User and adds
a new role property.</p>

<p>A type alias can describe objects too, but it can also create other
types, such as union types, intersection types, primitive types, and
tuples.</p>

type Status = "active" | "inactive";

type User = {
  name: string;
  age: number;
};

type Admin = User & {
  role: string;
};

<p>Here, Status allows only two possible values. The & symbol combines
the properties of User with the role property.</p>


<p>Another difference is that TypeScript can merge interfaces with the same
name. This is called declaration merging. Type aliases cannot be
declared again with the same name in the same scope.</p>


<h3>When Should I Choose Each One?</h3>
<p>I choose interface mainly to describe object structures and want
to extend them. I choose type when I need union types, intersection
types, or other advanced type combinations. For simple object
structures, either one is a good choice.</p>


<h3>Conclusion:</h3>
<p>Both types and interfaces are useful in TypeScript. Neither is always
better than the other. I choose the one that best fits my needs and
follow the same style throughout my project.</p>
