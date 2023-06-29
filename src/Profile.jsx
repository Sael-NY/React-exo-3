const Profile = () => {



    const userInfosFromFakeApi = {
        firstName: "John",
        lastName: "Sourdough",
        age: 42,
        email: "contact@johndoe.fr",
        phone: "0123456789",
        adress: "1 rue de la Paix",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        job: "Développeur web"
    };



    return (
        <div className="profil">
            <h1>Profil</h1>
            <p>{userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}</p>
            <img className="img" src="https://i.scdn.co/image/ab67616d0000b273d45ec66aa3cf3864205fd068" alt="Homme viril (sigma)" />
            <p>Age : {userInfosFromFakeApi.age}</p>
            <p>Métier : {userInfosFromFakeApi.job}</p>
        </div>
    )
}
export default Profile;