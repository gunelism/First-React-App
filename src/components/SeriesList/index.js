import React from 'react';
import './index.css';


const SeriesListItems = ({series}) => (
	<li>
		{series.show.name}
	</li>
);
const SeriesList = (props) => {
	return (
		<div>
			<ul className="series_list">
			{props.list.map(series=>(
					<SeriesListItems series={series} key={series.show.id}/>
				)
			)}
			</ul>
		</div>
	)
}

export default SeriesList;