import { useState } from "react"

export const GetAllTracks = () => {
    // type TypeOst = {
    //   "data": [
    //     {
    //       "id": "string",
    //       "type": "tracks",
    //       "attributes": {
    //         "title": "string",
    //         "addedAt": "2026-04-13T15:46:44.005Z",
    //         "likesCount": 0,
    //         "attachments": [
    //           {
    //             "id": "string",
    //             "addedAt": "2026-04-13T15:46:44.005Z",
    //             "updatedAt": "2026-04-13T15:46:44.005Z",
    //             "version": 0,
    //             "url": "https://cdn.example.com/uploads/track123/cover.jpg",
    //             "contentType": "image/jpeg",
    //             "originalName": "cover.jpg",
    //             "fileSize": 34872
    //           }
    //         ],
    //         "images": {
    //           "main": [
    //             {
    //               "type": "original",
    //               "width": 0,
    //               "height": 0,
    //               "fileSize": 0,
    //               "url": "string"
    //             }
    //           ]
    //         },
    //         "user": {
    //           "id": "string",
    //           "name": "string"
    //         },
    //         "currentUserReaction": 0,
    //         "isPublished": true,
    //         "publishedAt": "2026-04-13T15:46:44.005Z",
    //         "duration": 0
    //       },
    //       "relationships": {
    //         "artists": {
    //           "data": [
    //             {
    //               "id": "string",
    //               "type": "string"
    //             }
    //           ]
    //         }
    //       }
    //     }
    //   ],
    //   "meta": {
    //     "page": 0,
    //     "pageSize": 0,
    //     "totalCount": 0,
    //     "pagesCount": 0,
    //     "nextCursor": "string"
    //   },
    //   "included": [
    //     {
    //       "id": "string",
    //       "type": "string",
    //       "attributes": {
    //         "name": "string"
    //       }
    //     }
    //   ]
    // }
    
    
    
    
    

    
    const promise = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
                headers: {
                    "api-key": "482dd083-09fa-4e8e-bf40-3137d5d95947"
                }
        })
        .then(res => res.json())
        
       
    
    return promise
}