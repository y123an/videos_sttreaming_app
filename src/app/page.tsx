import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Upload Image</h1>
      <form action="http://127.0.0.1:4000/upload" encType="multipart/form-data" method="POST">
        <input type="file" name="myImage" accept="*" />
        <input type="submit" value="Upload Photo" />
      </form>
    </main>
  );
}
