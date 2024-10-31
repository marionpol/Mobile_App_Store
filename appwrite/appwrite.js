import { Account, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.js.app',
    projectId: '670f74ae001481a113bc',
    databaseId: '670f7646002c7493e06e',
    userCollectionId: '670f7679002f9175ebba',
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
} = appwriteConfig

const client = new Client();

client
    .setEndpoint(endpoint) 
    .setProject(projectId) 
    .setPlatform(platform) 
;

const account = new Account(client);
const databases = new Databases(client);

const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error;

        await signIn(email, password)

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
            accountId: newAccount.$id,
            email: email,
            username: username
            }
        );
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(databaseId, userCollectionId,
        [Query.equal('accountId', currentAccount.$id)])

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}


export const logOut = async () => {
    try {
       const session = await account.deleteSession('current')
       
       return session;
    } catch (error) {
        throw new Error(error)
    }
}



export { createUser };