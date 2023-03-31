import './MainContent.css';

export const MainContent = () => {
    const divItems = [
        {title: "Lorem 1", par: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae illo eius dicta reprehenderit. Obcaecati ut eius enim, voluptatum assumenda nam repellat voluptatibus quia dolorum earum atque veniam numquam voluptas in."},
        {title: "Lorem 2", par: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptatem eum iure excepturi commodi voluptatibus fuga odio! Dolore accusantium corrupti dicta voluptatum! Quis cupiditate blanditiis minus libero atque magnam obcaecati?"},
        {title: "Lorem 3", par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus eveniet eligendi repellat? Officia deleniti ab culpa numquam earum sed dolorem quaerat! Sapiente consequuntur, veritatis nostrum ut nemo mollitia! Mollitia."},
        {title: "Lorem 4", par: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit cumque est perspiciatis, nemo pariatur dolorum blanditiis impedit magni nostrum nobis laboriosam inventore qui tenetur quo quis distinctio exercitationem, consequatur beatae."},
        {title: "Lorem 5", par: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem esse quasi voluptas deleniti. Soluta quasi totam magnam possimus molestias veritatis, blanditiis nulla consectetur quam, assumenda at veniam nesciunt est."},
        {title: "Lorem 6", par: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, voluptatem perspiciatis? Cum quaerat quas voluptatem quisquam accusantium ipsa, alias natus ipsum quos, itaque blanditiis laudantium minus impedit tempora nisi autem."}
    ];
    return (
        <div className="main">
            {divItems.map((item) => (
                <div className="item">
                    <h4 className="title">{item.title}</h4>
                    <p className="paragraph">{item.par}</p>
                </div>
            ))}
        </div>
    )
}