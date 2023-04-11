"use strict";
var ContentID;
(function (ContentID) {
    ContentID["AddServer"] = "Add Server";
    ContentID["Explore"] = "Explore";
    ContentID["Home"] = "Home";
})(ContentID || (ContentID = {}));
var CustomContentID;
(function (CustomContentID) {
    CustomContentID["GamingServer"] = "gaming-server";
    CustomContentID["PizzaLoversServer"] = "pizza-lovers-server";
    CustomContentID["LinksServer"] = "links-server";
})(CustomContentID || (CustomContentID = {}));
var NavbarItemType;
(function (NavbarItemType) {
    NavbarItemType["Custom"] = "Custom";
    NavbarItemType["Default"] = "Default";
    NavbarItemType["Home"] = "Home";
})(NavbarItemType || (NavbarItemType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Away"] = "Away";
    UserStatus["Busy"] = "Busy";
    UserStatus["Offline"] = "Offline";
    UserStatus["Online"] = "Online";
})(UserStatus || (UserStatus = {}));
var TooltipDirection;
(function (TooltipDirection) {
    TooltipDirection["Right"] = "Right";
    TooltipDirection["Top"] = "Top";
})(TooltipDirection || (TooltipDirection = {}));
// Create a container element
const container = document.createElement("div");
container.classList.add("popup-container");
// Create a popup element
const popup = document.createElement("div");
popup.classList.add("popup");
// Add content to the popup
const header = document.createElement("h2");
header.textContent = "Welcome to my website!";
popup.appendChild(header);
const message = document.createElement("p");
message.textContent = "We're glad you're here. Please take a moment to read these important instructions before continuing; 1) You can click the server icons on the side to view sections of the website, 2) pls no ddos federnat1";
popup.appendChild(message);
const closeButton = document.createElement("button");
closeButton.textContent = "Thanks!";
closeButton.addEventListener("click", () => {
    container.remove();
});
popup.appendChild(closeButton);
// Add the popup to the container
container.appendChild(popup);
// Add the container to the document
document.body.appendChild(container);
const Tooltip = (props) => {
    const direction = props.direction || TooltipDirection.Right;
    return (React.createElement("div", { className: classNames("tooltip", direction.toLowerCase()) },
        React.createElement("p", null, props.text)));
};
const ActiveContent = () => {
    const { state } = React.useContext(AppContext);
    const getContentIcon = () => {
        switch (state.activeContentID) {
            case ContentID.Home:
                return "fa-brands fa-discord";
            case ContentID.AddServer:
                return "fa-solid fa-plus";
            case ContentID.Explore:
                return "";
            case CustomContentID.GamingServer:
                return "";
            case CustomContentID.PizzaLoversServer:
                return "";
            case CustomContentID.LinksServer:
                return "";
            default:
                return "";
        }
    };
    const showButton = state.activeContentID === CustomContentID.GamingServer ||
        state.activeContentID === CustomContentID.PizzaLoversServer ||
        state.activeContentID === CustomContentID.LinksServer;
    return (React.createElement("div", { id: "active-content" },
        React.createElement("i", { key: state.activeContentID, className: getContentIcon() }),
        state.activeContentID === CustomContentID.PizzaLoversServer && (React.createElement("a", null,
            React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                React.createElement("div", { style: { marginLeft: '50px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' } },
                    React.createElement("h1", null,
                        React.createElement("img", { src: "https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024", alt: "Link Icon", style: { objectFit: 'cover', width: '100%', height: '100%' } }))),
                React.createElement("div", { style: { marginLeft: '10px' } },
                    React.createElement("span", null,
                        React.createElement("b", null, "\u0441\u0438\u0444\u0438\u044F ")),
                    React.createElement("span", { style: { fontSize: '12px' } }, "Today at 12:00"))),
            React.createElement("div", { style: { marginLeft: '110px' } },
                React.createElement("span", null, "hi there!"),
                React.createElement("br", null),
                React.createElement("span", null, "my name is syphia and i travel and make videos sometimes (the last part is a lie i never make videos)"),
                React.createElement("br", null),
                React.createElement("span", null, "i am 15 (as of now) and am from europe (if you want more details please check the discord server"),
                React.createElement("br", null),
                React.createElement("span", null, "if you are new to the website there is stuff at the left (servers) which you can click on and see stuff that ive done (very little)"),
                React.createElement("br", null),
                React.createElement("span", null, "this website was difficult to make and i think it turned out well so be kind and subscribe if you haven't"),
                React.createElement("br", null),
                React.createElement("span", null, "i use she/her pronous (yes womar skeri)"),
                React.createElement("br", null),
                React.createElement("span", null, "thats kinda it hope you like the website")))),
        state.activeContentID === CustomContentID.GamingServer && (React.createElement("a", null,
            React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                React.createElement("div", { style: { marginLeft: '50px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' } },
                    React.createElement("h1", null,
                        React.createElement("img", { src: "https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024", alt: "Link Icon", style: { objectFit: 'cover', width: '100%', height: '100%' } }))),
                React.createElement("div", { style: { marginLeft: '10px' } },
                    React.createElement("span", null,
                        React.createElement("b", null, "\u0441\u0438\u0444\u0438\u044F ")),
                    React.createElement("span", { style: { fontSize: '12px' } }, "Today at 12:00"))),
            React.createElement("div", { style: { marginLeft: '110px' } },
                React.createElement("span", null, "my game i made and is half-good (pretty self explanatory)"),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("button", { class: "projectButton" },
                    React.createElement("a", { href: "https://mousemover.syphia.repl.co/" }, "aaaaaaaaaaaaaaa")),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("span", null, "some cool stuff coming soon perchance (most likely a lie)")))),
        state.activeContentID === CustomContentID.LinksServer && (React.createElement("a", null,
            React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                React.createElement("div", { style: { marginLeft: '50px', width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', objectFit: 'cover' } },
                    React.createElement("h1", null,
                        React.createElement("img", { src: "https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024", alt: "Link Icon", style: { objectFit: 'cover', width: '100%', height: '100%' } }))),
                React.createElement("div", { style: { marginLeft: '10px' } },
                    React.createElement("span", null,
                        React.createElement("b", null, "\u0441\u0438\u0444\u0438\u044F ")),
                    React.createElement("span", { style: { fontSize: '12px' } }, "Today at 12:00"))),
            React.createElement("div", { style: { marginLeft: '110px' } },
                React.createElement("span", null,
                    "youtube: ",
                    React.createElement("a", { href: "https://www.youtube.com/@syphia/featured" }, "https://www.youtube.com/@syphia/featured")),
                React.createElement("br", null),
                React.createElement("span", null,
                    "discord: ",
                    React.createElement("a", { href: "https://discord.gg/SvugUdNxxK" }, "https://discord.gg/SvugUdNxxK")),
                React.createElement("br", null),
                React.createElement("span", null,
                    "spotify: ",
                    React.createElement("a", { href: "https://open.spotify.com/user/31ulwdc3tcyolpnyft7qequvhip4" }, "https://open.spotify.com/user/31ulwdc3tcyolpnyft7qequvhip4")),
                React.createElement("br", null),
                React.createElement("span", null,
                    "twitch: ",
                    React.createElement("a", { href: "https://www.twitch.tv/syphialive" }, "https://www.twitch.tv/syphialive")),
                React.createElement("br", null),
                React.createElement("span", null,
                    "github: ",
                    React.createElement("a", { href: "https://github.com/Syphiareal" }, "https://github.com/Syphiareal")),
                React.createElement("br", null),
                React.createElement("span", null,
                    "replit: ",
                    React.createElement("a", { href: "https://replit.com/@syphia" }, "https://replit.com/@syphia"))))),
        showButton && (React.createElement("button", { className: "messagebox", disabled: true }, "You do not have permission to speak here")),
        state.activeContentID === ContentID.Explore && (React.createElement("iframe", { src: "https://discord.com/widget?id=1023276793052024852&theme=dark", width: "100%", height: "100%", allowtransparency: "true", frameborder: "0", sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" }))));
};
const UserStatusIcon = (props) => {
    const getIcon = () => {
        switch (props.status) {
            case UserStatus.Away:
                return "fa-solid fa-moon";
            case UserStatus.Busy:
                return "fa-solid fa-do-not-enter";
            case UserStatus.Offline:
                return "fa-solid fa-circle-dot";
            case UserStatus.Online:
                return "fa-solid fa-circle";
        }
    };
    return (React.createElement("div", { className: classNames("user-status-icon", props.status.toLowerCase()) },
        React.createElement("i", { className: getIcon() })));
};
const UserIcon = (props) => {
    const { user } = props;
    const styles = {
        backgroundImage: `url(${user.image})`
    };
    return (React.createElement("div", { className: "user-icon", style: styles },
        React.createElement(UserStatusIcon, { status: user.status })));
};
const CurrentUserControlMenuButton = (props) => {
    const getIcon = () => {
        if (props.icon) {
            return (React.createElement("i", { className: props.icon }));
        }
        else if (props.status) {
            return (React.createElement(UserStatusIcon, { status: props.status }));
        }
    };
    const getDesc = () => {
        if (props.desc) {
            return (React.createElement("p", { className: "current-user-control-menu-button-desc" }, props.desc));
        }
    };
    return (React.createElement("button", { className: "current-user-control-menu-button", type: "button" },
        React.createElement("div", { className: "current-user-control-menu-button-icon" }, getIcon()),
        React.createElement("div", { className: "current-user-control-menu-button-content" },
            React.createElement("p", { className: "current-user-control-menu-button-label" }, props.label),
            getDesc())));
};
const CurrentUserControlMenu = () => {
    return (React.createElement("div", { id: "current-user-control-menu" },
        React.createElement("div", { className: "current-user-control-menu-section" },
            React.createElement(CurrentUserControlMenuButton, { label: "Online", status: UserStatus.Online })),
        React.createElement("div", { className: "current-user-control-menu-section" },
            React.createElement(CurrentUserControlMenuButton, { label: "Idle", status: UserStatus.Away }),
            React.createElement(CurrentUserControlMenuButton, { desc: "You will not receive any desktop notifications.", label: "Do Not Disturb", status: UserStatus.Busy }),
            React.createElement(CurrentUserControlMenuButton, { desc: "You will not appear online, but will have full access to all of Discord.", label: "Invisible", status: UserStatus.Offline })),
        React.createElement("div", { className: "current-user-control-menu-section" },
            React.createElement(CurrentUserControlMenuButton, { icon: "fa-regular fa-face-grin", label: "Set a custom status" })),
        React.createElement("div", { className: "current-user-control-menu-section" },
            React.createElement(CurrentUserControlMenuButton, { icon: "fa-solid fa-arrows-repeat", label: "Switch Accounts" }))));
};
const CurrentUserControlButton = (props) => {
    return (React.createElement("button", { className: "current-user-control-button" },
        React.createElement("i", { className: props.icon }),
        React.createElement(Tooltip, { direction: TooltipDirection.Top, text: props.tooltip })));
};
const CurrentUserControl = () => {
    const { user } = React.useContext(AppContext);
    const [menuToggled, toggleMenu] = React.useState(true);
    const handleOnClick = () => {
        toggleMenu(!menuToggled);
    };
    const getMenu = () => {
        if (menuToggled) {
            return (React.createElement(CurrentUserControlMenu, null));
        }
    };
    return (React.createElement("div", { id: "current-user-control" },
        React.createElement("div", { id: "current-user" },
            React.createElement("button", { id: "current-user-menu-button", type: "button", onClick: handleOnClick },
                React.createElement(UserIcon, { user: user })),
            React.createElement("div", { id: "current-user-details" },
                React.createElement("label", { id: "current-user-username" }, user.username),
                React.createElement("label", { id: "current-user-id" },
                    "#",
                    user.id)),
            React.createElement("div", { id: "current-user-control-buttons" },
                React.createElement(CurrentUserControlButton, { icon: "fa-solid fa-microphone", tooltip: "Mute" }),
                React.createElement(CurrentUserControlButton, { icon: "fa-solid fa-headphones", tooltip: "Deafen" }),
                React.createElement(CurrentUserControlButton, { icon: "fa-solid fa-gear", tooltip: "User Settings" }))),
        getMenu()));
};
const DirectMessages = () => {
    const getItems = () => {
        const users = [{
                id: "9803",
                image: "https://cdn.discordapp.com/avatars/475726340277141504/a885652787371d2c6224d2a01cbedfb3.png?size=1024",
                status: UserStatus.Away,
                username: "Totò Sabbia"
            }, {
                activity: "Playing Lunar Client",
                id: "4058",
                image: "https://cdn.discordapp.com/avatars/619238863436644353/533a9a40ec9e2fef3ec0498644b2f244.png?size=1024",
                status: UserStatus.Busy,
                username: "NizhnyBall"
            }, {
                id: "6356",
                image: "https://cdn.discordapp.com/avatars/925379629584375818/e24322c4462cefbcdb69f208b7d7ed78.png?size=1024",
                status: UserStatus.Online,
                username: "lucas"
            }, {
                id: "4705",
                image: "https://cdn.discordapp.com/avatars/1030132326832816221/fe0112e1778ffccdf41cfbf445386eb6.png?size=1024",
                status: UserStatus.Offline,
                username: "midou"
            }, {
                id: "2552",
                image: "https://i.ibb.co/6wXCYK1/dfc155898d0eddec523d8361577218a0.png",
                status: UserStatus.Away,
                username: "oreo!!!"
            }, {
                id: "5459",
                image: "https://cdn.discordapp.com/avatars/928694903377104978/2ed246ced9f37db76977d75e77a3adb5.png?size=1024",
                status: UserStatus.Busy,
                username: "N1narr"
            }, {
                activity: "Playing Grand Theft Auto V",
                id: "2036",
                image: "https://i.ibb.co/6RYGgHC/4cb88a39e0d72b9f6a03819172afa5b3.png",
                status: UserStatus.Busy,
                username: "kittenheart5"
            }];
        return users.map((user) => {
            const getActivity = () => {
                if (user.activity) {
                    return (React.createElement("p", { className: "direct-messages-item-user-activity" }, user.activity));
                }
            };
            return (React.createElement("div", { className: "direct-messages-item content-navigator-button", key: user.id },
                React.createElement(UserIcon, { user: user }),
                React.createElement("div", { className: "direct-messages-item-user-info" },
                    React.createElement("p", { className: "direct-messages-item-username" }, user.username),
                    getActivity()),
                React.createElement("button", { className: "direct-messages-item-close-button", type: "button" },
                    React.createElement("i", { className: "fa-solid fa-xmark" }))));
        });
    };
    return (React.createElement("div", { id: "direct-messages" },
        React.createElement("div", { id: "direct-messages-header" },
            React.createElement("h3", { id: "direct-messages-title" }, "Direct Messages"),
            React.createElement("button", { id: "direct-messages-add-button", type: "button" },
                React.createElement("i", { className: "fa-solid fa-plus" }),
                React.createElement(Tooltip, { direction: TooltipDirection.Top, text: "Create DM" }))),
        React.createElement("div", { id: "direct-messages-items" }, getItems())));
};
const ContentNavigatorButton = (props) => {
    return (React.createElement("button", { className: "content-navigator-button", type: "button" }, props.children));
};
const ContentNavigator = () => {
    return (React.createElement("div", { id: "content-navigator" },
        React.createElement("button", { id: "content-navigator-search-bar-toggle", type: "button" }, "Find or start a conversation"),
        React.createElement(CurrentUserControl, null),
        React.createElement("div", { className: "content-navigator-section" },
            React.createElement(ContentNavigatorButton, null,
                React.createElement("i", { className: "fa-solid fa-person-drowning" }),
                React.createElement("p", null, "Friends")),
            React.createElement(ContentNavigatorButton, null,
                React.createElement("i", { className: "fa-solid fa-fire" }),
                React.createElement("p", null, "Nitro")),
            React.createElement(DirectMessages, null))));
};
const NavbarItem = (props) => {
    const { state, selectContentID } = React.useContext(AppContext);
    const handleOnClick = () => {
        selectContentID(props.contentID);
    };
    const getContent = () => {
        if (props.icon) {
            const getStyles = () => {
                const styles = {};
                if (props.color) {
                    styles.color = `rgb(${props.color})`;
                }
                return styles;
            };
            return (React.createElement("i", { className: props.icon, style: getStyles() }));
        }
        else if (props.image) {
            const styles = {
                backgroundImage: `url(${props.image})`
            };
            return (React.createElement("div", { className: "navbar-item-image", style: styles }));
        }
    };
    const getClasses = () => {
        return classNames("navbar-item", props.type.toLowerCase(), {
            active: props.contentID === state.activeContentID
        });
    };
    return (React.createElement("button", { type: "button", className: getClasses(), onClick: handleOnClick },
        React.createElement("div", { className: "navbar-item-content" }, getContent()),
        React.createElement(Tooltip, { text: props.label })));
};
const Navbar = () => {
    const getCustomItems = () => {
        const items = [{
                contentID: CustomContentID.PizzaLoversServer,
                image: "https://i.ibb.co/c6R708T/sunset.jpg",
                label: "About me"
            }, {
                contentID: CustomContentID.GamingServer,
                image: "https://i.ibb.co/ZYDXYMT/bridge.jpg",
                label: "Projects"
            }, {
                contentID: CustomContentID.LinksServer,
                image: "https://i.ibb.co/6scXHsL/sky.jpg",
                label: "Links"
            }];
        return items.map((item) => (React.createElement(NavbarItem, { key: item.contentID, contentID: item.contentID, image: item.image, label: item.label, type: NavbarItemType.Custom })));
    };
    return (React.createElement("div", { id: "navbar-wrapper" },
        React.createElement("div", { id: "navbar" },
            React.createElement("div", { className: "navbar-section" },
                React.createElement(NavbarItem, { contentID: ContentID.Home, icon: "fa-brands fa-discord", label: "Home", type: NavbarItemType.Home })),
            React.createElement("div", { className: "navbar-section" },
                getCustomItems(),
                React.createElement(NavbarItem, { contentID: ContentID.AddServer, icon: "fa-solid fa-plus", label: "Add a Server", type: NavbarItemType.Default }),
                React.createElement(NavbarItem, { contentID: ContentID.Explore, icon: "fa-solid fa-compass", label: "Join my server", type: NavbarItemType.Default })))));
};
const AppContext = React.createContext(null);
const Discord = () => {
    const [state, setStateTo] = React.useState({
        activeContentID: ContentID.Home,
        user: {
            id: "0001",
            image: "https://cdn.discordapp.com/avatars/1014610902437343272/1d24c99978aaf805de999192ce2a7bb4.png?size=1024",
            status: UserStatus.Busy,
            username: "сифия"
        }
    });
    const selectContentID = (contentID) => {
        setStateTo(Object.assign(Object.assign({}, state), { activeContentID: contentID }));
    };
    return (React.createElement(AppContext.Provider, { value: { state, user: state.user, setStateTo, selectContentID } },
        React.createElement("div", { id: "discord-app" },
            React.createElement(Navbar, null),
            React.createElement(ContentNavigator, null),
            React.createElement(ActiveContent, null))));
};
ReactDOM.render(React.createElement(Discord, null), document.getElementById("root"));