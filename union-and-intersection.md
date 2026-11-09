<h1 style="text-align: center;">Using Union (|) and Intersection (&) Types Together in TypeScript</h1>

<h3>Introduction:</h3>
<p>In TypeScript, Union (|) and Intersection (&) are both important. A Union allows you to define multiple possible types for a variable, while an Intersection enables you to combine the properties of several types to create a new one. These two are often used together to store both common data and information specific to different roles.</p>


<h3>Detailed Body Paragraphs with Code Examples:</h3>
<p>Let’s consider a problem-solving scenario involving two types of users: Admin and Customer. Both will have an ID, name, and email, but the additional information will vary based on their respective roles.</p>
<br>

type BaseUser = {
  id: number;
  name: string;
  email: string;
}

type Admin = {
  role: "admin";
  permissions: string[];
}

type Customer = {
  role: "customer";
  purchaseCount: number;
}

type User = BaseUser & (Admin | Customer)

<p>Here, (Admin | Customer) indicates that a user must be either an (Admin) or a (Customer). Meanwhile, (BaseUser & (Admin | Customer)) ensures that both types of users possess common properties.</p>

<br>

<h3>Conclusion:</h3>
<p>Using Union and Intersection together makes code more flexible, reusable, and type-safe. This approach is particularly useful for role-based applications and for managing objects with diverse characteristics.</p>
