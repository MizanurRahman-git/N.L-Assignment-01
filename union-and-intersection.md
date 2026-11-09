<h1 style="text-align: center;">TypeScript-এ Union (|) এবং Intersection (&) Type একসঙ্গে ব্যবহার</h1>

<h3>Introduction:</h3>
<p>TypeScript-এ Union (|) এবং Intersection (&)---দুটি গুরুত্বপূর্ণ Type
System feature। Union দিয়ে একটি ভেরিয়েবলে একাধিক সম্ভাব্য type নির্ধারণ করা
যায়। অন্যদিকে, Intersection দিয়ে একাধিক type-এর বৈশিষ্ট্য একত্র করে একটি নতুন
type তৈরি করা যায়। বাস্তব প্রজেক্টে একই ধরনের common তথ্যের পাশাপাশি ভিন্ন
ভিন্ন role-এর তথ্য সংরক্ষণ করতে এই দুটো একসঙ্গে ব্যবহার করা বেশ কার্যকর।</p>


<h3>Detailed Body Paragraphs with Code Examples:</h3>
<p>ধরা যাক, আমরা একটি ওয়েব অ্যাপ তৈরি করছি, যেখানে Admin এবং Customer---দুই
ধরনের user আছে। উভয়েরই id, name ও email থাকবে, কিন্তু role অনুযায়ী
অতিরিক্ত তথ্য আলাদা হবে।</p>
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

<p>এখানে Admin | Customer বোঝায়, user হয় Admin অথবা Customer হবে। আর
BaseUser & (Admin | Customer) নিশ্চিত করে যে, দুই ধরনের user-এরই common properties
থাকতে হবে।</p>

<br>

<h3>Conclusion:</h3>
<p>Union ও Intersection একসঙ্গে ব্যবহার করলে code আরও flexible, reusable এবং
type-safe হয়। বিশেষ করে role-based application, API data এবং ভিন্ন
বৈশিষ্ট্যের object পরিচালনায় এই পদ্ধতি বেশ উপকারী।</p>
