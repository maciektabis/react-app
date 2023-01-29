import styles from './List.module.scss';
import Column from '../Column/Column';

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
				<Column title='Books' icon='book' />
				<Column title='Movies' icon='film' />
				<Column title='Games' icon='gamepad' />
			</section>
		</div>
	);
};
export default List;
