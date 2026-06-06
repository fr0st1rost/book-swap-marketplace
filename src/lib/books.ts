import b1 from "@/assets/book1.jpg";
import b2 from "@/assets/book2.jpg";
import b3 from "@/assets/book3.jpg";
import b4 from "@/assets/book4.jpg";
import b5 from "@/assets/book5.jpg";
import b6 from "@/assets/book6.jpg";

export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: "Like New" | "Very Good" | "Good" | "Acceptable";
  category: string;
  cover: string;
  description: string;
  seller: string;
};

export const books: Book[] = [
  { id: "1", title: "The Silent Patient", author: "Alex Michaelides", price: 8.5, condition: "Like New", category: "Thriller", cover: b1, seller: "Emma R.", description: "A psychological thriller about a woman who shoots her husband and then never speaks again. Barely read, no markings." },
  { id: "2", title: "Atomic Habits", author: "James Clear", price: 12, condition: "Very Good", category: "Self-help", cover: b2, seller: "Marco L.", description: "A practical guide to building good habits and breaking bad ones. Some highlights in the first chapter." },
  { id: "3", title: "The Midnight Library", author: "Matt Haig", price: 9, condition: "Good", category: "Fiction", cover: b3, seller: "Sophia K.", description: "Between life and death there is a library. A novel about regret, hope, and second chances." },
  { id: "4", title: "Where the Crawdads Sing", author: "Delia Owens", price: 7.5, condition: "Very Good", category: "Fiction", cover: b4, seller: "Liam T.", description: "Painted on the marsh — a coming-of-age mystery. Soft cover, pristine spine." },
  { id: "5", title: "Educated", author: "Tara Westover", price: 10, condition: "Like New", category: "Memoir", cover: b5, seller: "Aisha P.", description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge." },
  { id: "6", title: "Project Hail Mary", author: "Andy Weir", price: 11, condition: "Good", category: "Sci-Fi", cover: b6, seller: "Noah B.", description: "A lone astronaut must save the earth from disaster. From the author of The Martian." },
];

export const categories = [
  { id: "fiction", name: "Fiction", emoji: "📖" },
  { id: "self-help", name: "Self-help", emoji: "🌱" },
  { id: "sci-fi", name: "Sci-Fi", emoji: "🚀" },
  { id: "thriller", name: "Thriller", emoji: "🔍" },
  { id: "memoir", name: "Memoir", emoji: "✍️" },
  { id: "academic", name: "Academic", emoji: "🎓" },
];

export function getBook(id: string) {
  return books.find((b) => b.id === id);
}
