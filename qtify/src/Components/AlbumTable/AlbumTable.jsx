import './AlbumTable.css';

const AlbumTable = (props) => {
    return (
        <div className='albumTable'>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                <tbody>
                    {props.songs.map((elem) => (
                        <tr key={elem.id}>
                            <td>{elem.title}</td>
                            <td>{elem.artists}</td>
                            <td>{(elem.durationInMs / 6000).toFixed(2)} min</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default AlbumTable;
