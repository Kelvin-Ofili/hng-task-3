import React from "react";
import styles from "./styles.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const PictureComponent = ({ picture }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: picture.id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div className={`${style} ${styles.card}`} ref={setNodeRef} {...attributes} {...listeners}>
			{/* <div> */}
				<img src={picture.image} alt="" className={styles.image} />
				<h1>{picture.name}</h1>
				<div className={styles.tagsContainer}>
					{picture.tags.map((tag, index) => (
						<div className={styles.tags} key={index}>
							<p className={styles.tags__p}>{tag}</p>
						</div>
					))}
				</div>
			{/* </div> */}
		</div>
	);
};

export { PictureComponent };
