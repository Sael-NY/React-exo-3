const Experiences = () => {
    const experiencesFromFakeApi = [
        {
            id: 1,
            title: "Développeur front",
            company: "Company 1",
            description: "Développement d'une application web front",
            startDate: "2021-01-01",
            endDate: "2021-02-01",
            isCurrent: false,
        },
        {
            id: 2,
            title: "Développeur back",
            company: "Company 2",
            description: "Développement d'une application web back",
            startDate: "2022-02-01",
            endDate: "2022-03-01",
            isCurrent: false,
        },
        {
            id: 3,
            title: "Développeur fullstack",
            company: "Company 3",
            description: "Développement d'une application web fullstack",
            startDate: "2023-03-01",
            endDate: null,
            isCurrent: true,
        },
    ];


    return (
        <div>

            {experiencesFromFakeApi.map((exp) => {

                return (
                    exp.isCurrent && (

                        <article className="johnsourdough">
                            <h1>Experiences</h1>
                            <h2>John Doe</h2>
                            <h5>{exp.title}</h5>
                            <p>{exp.company}</p>

                            <p>{exp.description}</p>
                        </article>
                    )
                );
            })}
        </div>
    );
};





export default Experiences;