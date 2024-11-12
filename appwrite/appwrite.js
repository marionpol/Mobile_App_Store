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
        const newAccount = await account.create(ID.unique(), email, password, username);
        console.log("Account created:", newAccount);

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
        console.log("User document created:", newUser); 
        return newUser;
    } catch (error) {
        console.error("Error during user creation:", error);
        throw new Error(error);
    }
};

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session; 
    } catch (error) {
        throw new Error(error.message || "Failed to sign in");
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();


        const currentUser = await databases.listDocuments(databaseId, userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]);

        if (currentUser.total === 0) {
            throw new Error('No user document found.');
        }

        return currentUser.documents[0]; 
    } catch (error) {
        
        console.log("Error fetching current user: ", error.message);
        return null; 
    }
}

export const updateUser = async (userId, updatedData) => {
    try {
        const updatedUser = await databases.updateDocument(
            databaseId,
            userCollectionId,
            userId,
            updatedData
        );
        console.log("User document updated:", updatedUser);
        return updatedUser;
    } catch (error) {
        console.error("Error updating user:", error);
        throw new Error(error.message || "Failed to update user");
    }
};


export const logOut = async () => {
    try {
       const session = await account.deleteSession('current')
       
       return session;
    } catch (error) {
        throw new Error(error)
    }
}



export { createUser };