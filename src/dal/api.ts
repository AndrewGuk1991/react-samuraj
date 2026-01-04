export type GetTrackDetailsOutputData = {
    id: string,
    attributes: {
        title: string
        lyrics: string | null
    }
}

type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            // 'api-key': '18d25123-22fb-4110-afc0-4049f8ee9c05'
        }
    }).then(res => res.json())

    return promise
}

type AttachmentDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string,
    attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            // 'api-key': '18d25123-22fb-4110-afc0-4049f8ee9c05'
        }
    }).then(res => res.json())

    return promise
}