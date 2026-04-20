import { createRoot } from 'react-dom/client'
import { GetAllTracks } from '../dal/api.ts';


import { TrackList } from './TrackList.tsx';



import { useState, useEffect } from 'react';



const rootEl = document.getElementById('root')!;
const createRe = createRoot(rootEl);
createRe.render(<MainPage />)

function MainPage() {
type TypeOst = {
  "data": [
    {
      "id": "string",
      "type": "tracks",
      "attributes": {
        "title": "string",
        "addedAt": "2026-04-13T15:46:44.005Z",
        "likesCount": 0,
        "attachments": [
          {
            "id": "string",
            "addedAt": "2026-04-13T15:46:44.005Z",
            "updatedAt": "2026-04-13T15:46:44.005Z",
            "version": 0,
            "url": "https://cdn.example.com/uploads/track123/cover.jpg",
            "contentType": "image/jpeg",
            "originalName": "cover.jpg",
            "fileSize": 34872
          }
        ],
        "images": {
          "main": [
            {
              "type": "original",
              "width": 0,
              "height": 0,
              "fileSize": 0,
              "url": "string"
            }
          ]
        },
        "user": {
          "id": "string",
          "name": "string"
        },
        "currentUserReaction": 0,
        "isPublished": true,
        "publishedAt": "2026-04-13T15:46:44.005Z",
        "duration": 0
      },
      "relationships": {
        "artists": {
          "data": [
            {
              "id": "string",
              "type": "string"
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "page": 0,
    "pageSize": 0,
    "totalCount": 0,
    "pagesCount": 0,
    "nextCursor": "string"
  },
  "included": [
    {
      "id": "string",
      "type": "string",
      "attributes": {
        "name": "string"
      }
    }
  ]
}


//hello

    const [palm, setPalm] = useState<TypeOst | null>(null)

    useEffect(() => {
        const pormise = GetAllTracks()
        pormise.then(json => setPalm(json.data))
        
    }, [])
    
    return (
        <div>
            
            <div style={{display: "flex", alignItems: "flex-start"}}>
                <TrackList items={palm}/>
            </div>
            

        </div>
    )
}





