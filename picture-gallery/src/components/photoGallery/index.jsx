import React, { useState } from "react";
import styles from "./styles.module.scss";
import { PictureComponent } from "../pictureComponent";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";

const PictureGallery = ({ images }) => {
	const [value, setValue] = useState("");
	const [pictures, setPictures] = useState(images);
	const handleSearch = (e) => {
		setValue(e.target.value);
		const filteredPictures = images.filter((picture) => {
			const tags = picture.tags.map((tag) => tag.toLowerCase());
			return (
				tags.some((tag) => tag.includes(e.target.value)) ||
				picture.name.toLowerCase().includes(e.target.value.toLowerCase())
			);
		});
		setPictures(filteredPictures);
	};
	const handleDragEnd = (event) => {
		const { active, over } = event;
		console.log("active " + active.id);
		console.log("over " + over.id);
		if (active.id !== over.id) {
			const sortedPictures = [...pictures];
			const [movedItem] = sortedPictures.splice(active.id, 1);
			sortedPictures.splice(over.id, 0, movedItem);
			setPictures(sortedPictures);
		}
	};
	return (
		<div className={styles.position}>
			<input
				type="text"
				onChange={handleSearch}
				value={value}
				className={styles.input}
			/>
			<div className={styles.layout}>
				<DndContext
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
				>
					<SortableContext items={pictures} strategy={rectSortingStrategy}>
						{pictures.map((picture, index) => (
							<PictureComponent picture={picture} key={index} />
						))}
					</SortableContext>
				</DndContext>
			</div>

			{/* <div className={styles.layout}></div> */}
		</div>
	);
};

export { PictureGallery };
