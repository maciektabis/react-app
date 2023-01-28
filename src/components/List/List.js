import styles from './List.module.scss';

const List = () => {
	return (
		<div>
			<header className={styles.header}>
				<h2 className={styles.title}>
					This to do<span>soon!</span>
				</h2>
			</header>
			<p className={styles.description}>
				Interesting things i want to check oyt
			</p>
			<section className={styles.columns}>
				<article>
					<h4>Books</h4>
				</article>
				<article>
					<h4>Movies</h4>
				</article>
				<article>
					<h4>Games</h4>
				</article>
			</section>
		</div>
	);
};
export default List;
