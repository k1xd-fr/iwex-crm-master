"use client";

import { useState } from "react";
import styles from "../AddQuestionnaire/addQuestionnaire.module.sass";
import ky from "ky";
import PhotoGallery from "./photo";

const AddUserPhoto: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      try {
        await ky.post("/api/upload", { body: formData });
        console.log("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className={styles.user}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Загрузить фото</button>
      </form>
      {uploadedPhotos.length > 0 && <PhotoGallery photos={uploadedPhotos} />}
    </div>
  );
};

export default AddUserPhoto;
