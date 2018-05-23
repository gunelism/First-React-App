import React from 'react';
import './index.css';

const SeriesListItems = ({series}) => (
	<li key={series.show.id}>
		{series.show.name}
	</li>
);
const SeriesList = (props) => {
	return (
		<div>
			<ul className="series_list">
			{props.list.map(series=>(
					<SeriesListItems series={series} />
				)
			)}
			</ul>
		</div>
	)
}

export default SeriesList;