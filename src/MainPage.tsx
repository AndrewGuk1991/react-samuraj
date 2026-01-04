import {TrackList} from "./ui/TrackList.tsx";
import {TrackDetail} from "./ui/TrackDetail.tsx";
import {useTrackSelection} from "./bll/useTrackSelection.tsx";

export function MainPage() {
    const {trackId, setTrackId} = useTrackSelection();

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id);
    }

    return (
        <div>

            <div style={{display: 'flex', gap: '30px', margin: '20px'}}>
                <h1>Musicfun Player</h1>
                <TrackList
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackSelect} />
                <TrackDetail trackId={trackId} />
            </div>
        </div>
    )
}