import Realm from 'realm'
import * as models from '../models'

let realm = new Realm({
  schema: Object.values(models),
  schemaVersion: 34,
  migration: function(oldRealm, newRealm) {
    if (oldRealm.schemaVersion < 17) {
      var oldObjects = oldRealm.objects('Contact')
      var newObjects = newRealm.objects('Contact')

      // loop through all objects and set the recordID property in the new schema
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i].recordID = oldObjects[i].recordID + ''
      }
    }
    if (oldRealm.schemaVersion < 27) {
      var oldObjects = oldRealm.objects('Contact')
      var newObjects = newRealm.objects('Contact')
      for (let i = 0; i < oldObjects.length; i++) {
        // Remove beginning document path so it is relative to document path
        newObjects[i].profilePath = oldObjects[i].profileUri.slice(oldObjects[i].profileUri.indexOf("/profileImage/"))
      }
    }
    if (oldRealm.schemaVersion < 29) {
      var invitations = newRealm.objects('Invitation')
      newRealm.delete(invitations)
    }
    if (oldRealm.schemaVersion < 30) {
      var newObjects = newRealm.objects('User')
      for (let user of newObjects) {
        user.isFriend = !user.isMe
      }
    }
    // Version 33 delete invitations so messages will resync
    // Version 34 delete invitations so texted count will resync
    if (oldRealm.schemaVersion < 34) {
      var invitations = newRealm.objects('Invitation')
      newRealm.delete(invitations)
    }
  }
})

realm.write(() => {
  // clean up deleted objects
  realm.delete(realm.objects('Group').filtered('_delete == true'))
})

// realm.write(() => {
//   realm.deleteAll()
// })

// Server side user
// realm.write(() => {
//   realm.create('User', {
//     id: "d9c3176a-91bd-4e3a-ba97-b86b3a7f38f7",
//     secret:"N6fpvTOgnDmX+i39Nn9Asw==",
//     profile_uri: "https://forkout-us-east-1.s3.amazonaws.com/profiles/4a42d942-6211-47b5-b03b-64be1c3ce044.jpg",
//     name: "Lida Tang",
//     isMe: true,
//     phone_number: "+16176539474"
//   })
// })

// Local user 1
// realm.write(() => {
//   realm.create('User', {
//     id: "c4b4ddca-8311-4ab3-8c58-1e9a6209e904",
//     secret:"KzpbaR++Q2qVnUqygSTYfw==",
//     profile_uri: "https://forkout-us-east-1.s3.amazonaws.com/profiles/7858dd5e-7ae2-4402-9adf-c343230d4b4f.jpg",
//     name: "Lida Tang",
//     isMe: true,
//     phone_number: "+16176539474"
//   })
// })

// Local user 2
// realm.write(() => {
//   realm.create('User', {
//     id: "06ab0eeb-80f1-4a37-b6d3-29061619a4bf",
//     secret:"EE2XHUTXBJsKuz4cUwBCFQ==",
//     profile_uri: "https://secure.gravatar.com/avatar/cf996fcc79f00d29ceacc6e6a7723a49?d=wavatar&forcedefault=y",
//     name: "Kate",
//     isMe: true,
//     phone_number: "+15555648583"
//   })
// })



let transaction = false
const realmMiddleware = store => next => action => {
  action.realm = realm
  return next(action)
}

export default realmMiddleware
