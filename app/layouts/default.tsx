import HeaderLayout from "./elements/header"
import AsideLayout from "./elements/aside"
import BreadcumbLayout from "./elements/breadcrumb"

const DefaultLayout = ({ children }) => {

    return (
        <body id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-toolbar-enabled="true" className="app-default">
            <HeaderLayout />
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                    <AsideLayout />
                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                            <div className="d-flex flex-column flex-column-fluid">
                                {children}

                            </div>
                            <div id="kt_app_footer" className="app-footer">
                                <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                                    <div className="text-dark order-2 order-md-1">
                                        <span className="text-muted fw-semibold me-1">2023&copy;</span>
                                        <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                                    </div>
                                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                        <li className="menu-item">
                                            <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
                <div className="card shadow-none border-0 rounded-0">
                    <div className="card-header" id="kt_activities_header">
                        <h3 className="card-title fw-bold text-dark">Activity Logs</h3>
                        <div className="card-toolbar">
                            <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body position-relative" id="kt_activities_body">
                        <div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                <a href="../../demo1/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
                                                <div className="min-w-175px pe-2">
                                                    <span className="badge badge-light text-muted">Application Design</span>
                                                </div>
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg" alt="img" />
                                                    </div>
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg" alt="img" />
                                                    </div>
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                                                    </div>
                                                </div>
                                                <div className="min-w-125px pe-2">
                                                    <span className="badge badge-light-primary">In Progress</span>
                                                </div>
                                                <a href="../../demo1/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                            </div>
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                <a href="../../demo1/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
                                                <div className="min-w-175px">
                                                    <span className="badge badge-light text-muted">CRM System Development</span>
                                                </div>
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-20.jpg" alt="img" />
                                                    </div>
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                                                    </div>
                                                </div>
                                                <div className="min-w-125px">
                                                    <span className="badge badge-light-success">Completed</span>
                                                </div>
                                                <a href="../../demo1/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-flag fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n2">
                                        <div className="overflow-auto pe-3">
                                            <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                                <span className="path5"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="mb-5 pe-3">
                                            <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-23.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    <img alt="" className="w-30px me-3" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/pdf.svg" />
                                                    <div className="ms-1 fw-semibold">
                                                        <a href="../../demo1/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                                                        <div className="text-gray-400">1.9mb</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    <img alt="../../demo1/dist/apps/projects/project.html" className="w-30px me-3" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/doc.svg" />
                                                    <div className="ms-1 fw-semibold">
                                                        <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                                                        <div className="text-gray-400">18kb</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-aligns-center">
                                                    <img alt="../../demo1/dist/apps/projects/project.html" className="w-30px me-3" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/files/css.svg" />
                                                    <div className="ms-1 fw-semibold">
                                                        <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                                                        <div className="text-gray-400">20mb</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-semibold mb-2">Task
                                                <a href="#" className="text-primary fw-bold me-1">#45890</a>merged with
                                                <a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:
                                            </div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-14.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-2.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                <div className="overlay me-10">
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-29.jpg" />
                                                    </div>
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                </div>
                                                <div className="overlay me-10">
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-31.jpg" />
                                                    </div>
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                </div>
                                                <div className="overlay">
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-40.jpg" />
                                                    </div>
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-sms fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-semibold mb-2">New case
                                                <a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project
                                            </div>
                                            <div className="overflow-auto pb-5">
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                    <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mb-10 mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-4.jpg" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overflow-auto pb-5">
                                            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                                <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                                <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                    <div className="mb-3 mb-md-0 fw-semibold">
                                                        <h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                                                        <div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                                                    </div>
                                                    <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-line w-40px"></div>
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-duotone ki-basket fs-2 text-gray-500">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="timeline-content mt-n1">
                                        <div className="pe-3 mb-5">
                                            <div className="fs-5 fw-semibold mb-2">New order
                                                <a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation
                                            </div>
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                                                <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer py-5 text-center" id="kt_activities_footer">
                        <a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities
                            <i className="ki-duotone ki-arrow-right fs-3 text-primary">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i></a>
                    </div>
                </div>
            </div>
            <div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
                <div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">
                    <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
                        <div className="card-title">
                            <div className="d-flex justify-content-center flex-column me-3">
                                <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
                                <div className="mb-0 lh-1">
                                    <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                                    <span className="fs-7 fw-semibold text-muted">Active</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-toolbar">
                            <div className="me-0">
                                <button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    <i className="ki-duotone ki-dots-square fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </button>
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                    <div className="menu-item px-3">
                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                                            <span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
                                                <i className="ki-duotone ki-information fs-7">
                                                    <span className="path1"></span>
                                                    <span className="path2"></span>
                                                    <span className="path3"></span>
                                                </i>
                                            </span></a>
                                    </div>
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">Groups</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                                            </div>
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-item px-3 my-1">
                                        <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                    </div>
                                </div>
                            </div>
                            <div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
                                <i className="ki-duotone ki-cross-square fs-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" id="kt_drawer_chat_messenger_body">
                        <div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                            <div className="d-flex justify-content-start mb-10">
                                <div className="d-flex flex-column align-items-start">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                        </div>
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">2 mins</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-10">
                                <div className="d-flex flex-column align-items-end">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">5 mins</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-10">
                                <div className="d-flex flex-column align-items-start">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                        </div>
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">1 Hour</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-10">
                                <div className="d-flex flex-column align-items-end">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">2 Hours</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-10">
                                <div className="d-flex flex-column align-items-start">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                        </div>
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">3 Hours</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
                                        <a href="https://keenthemes.com">Keenthemes.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-10">
                                <div className="d-flex flex-column align-items-end">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">4 Hours</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-10">
                                <div className="d-flex flex-column align-items-start">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                        </div>
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">5 Hours</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                                <div className="d-flex flex-column align-items-end">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">Just now</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                                <div className="d-flex flex-column align-items-start">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                        </div>
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">Just now</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                        <textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
                        <div className="d-flex flex-stack">
                            <div className="d-flex align-items-center me-2">
                                <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                    <i className="ki-duotone ki-paper-clip fs-3"></i>
                                </button>
                                <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                    <i className="ki-duotone ki-cloud-add fs-3">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </button>
                            </div>
                            <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">
                <div className="card card-flush w-100 rounded-0">
                    <div className="card-header">
                        <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
                        <div className="card-toolbar">
                            <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
                                <i className="ki-duotone ki-cross fs-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body hover-scroll-overlay-y h-400px pt-5">
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
                                    <span className="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
                                    <span className="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
                                    <span className="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-8.jpg" alt="" />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                                    <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-26.jpg" alt="" />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
                                    <span className="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-21.jpg" alt="" />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
                                    <span className="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-34.jpg" alt="" />
                            </div>
                        </div>
                        <div className="separator separator-dashed my-6"></div>
                        <div className="d-flex flex-stack">
                            <div className="d-flex flex-column me-3">
                                <div className="mb-3">
                                    <a href="../../demo1/dist/apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                                    <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-duotone ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-duotone ki-plus fs-4"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-27.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex flex-stack">
                            <span className="fw-bold text-gray-600">Total</span>
                            <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
                        </div>
                        <div className="d-flex flex-stack">
                            <span className="fw-bold text-gray-600">Sub total</span>
                            <span className="text-primary fw-bolder fs-5">$ 246.35</span>
                        </div>
                        <div className="d-flex justify-content-end mt-9">
                            <a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
                <i className="ki-duotone ki-arrow-up">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </div>
            <div className="modal fade" id="kt_modal_upgrade_plan" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content rounded">
                        <div className="modal-header justify-content-end border-0 pb-0">
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                        <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            <div className="mb-13 text-center">
                                <h1 className="mb-3">Upgrade a Plan</h1>
                                <div className="text-muted fw-semibold fs-5">If you need more info, please check
                                    <a href="#" className="link-primary fw-bold">Pricing Guidelines</a>.
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
                                    <button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</button>
                                    <button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</button>
                                </div>
                                <div className="row mt-10">
                                    <div className="col-lg-6 mb-10 mb-lg-0">
                                        <div className="nav flex-column">
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" checked="checked" value="startup" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Startup</div>
                                                        <div className="fw-semibold opacity-75">Best for startups</div>
                                                    </div>
                                                </div>
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span className="fs-3x fw-bold" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
                                                    <span className="fs-7 opacity-50">/
                                                        <span data-kt-element="period">Mon</span></span>
                                                </div>
                                            </label>
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" value="advanced" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Advanced</div>
                                                        <div className="fw-semibold opacity-75">Best for 100+ team size</div>
                                                    </div>
                                                </div>
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span className="fs-3x fw-bold" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
                                                    <span className="fs-7 opacity-50">/
                                                        <span data-kt-element="period">Mon</span></span>
                                                </div>
                                            </label>
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" value="enterprise" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Enterprise
                                                            <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">Popular</span>
                                                        </div>
                                                        <div className="fw-semibold opacity-75">Best value for 1000+ team</div>
                                                    </div>
                                                </div>
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span className="fs-3x fw-bold" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
                                                    <span className="fs-7 opacity-50">/
                                                        <span data-kt-element="period">Mon</span></span>
                                                </div>
                                            </label>
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_custom">
                                                <div className="d-flex align-items-center me-2">
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" value="custom" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Custom</div>
                                                        <div className="fw-semibold opacity-75">Requet a custom license</div>
                                                    </div>
                                                </div>
                                                <div className="ms-5">
                                                    <a href="#" className="btn btn-sm btn-success">Contact Us</a>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tab-content rounded h-100 bg-light p-10">
                                            <div className="tab-pane fade show active" id="kt_upgrade_plan_startup">
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for 10+ team size and new startup</div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Finance Module</span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Accounting Module</span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for 100+ team size and grown company</div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-duotone ki-cross-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for 1000+ team and enterpise</div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="kt_upgrade_plan_custom">
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for corporations</div>
                                                </div>
                                                <div className="pt-1">
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Users</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Project Integrations</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-center flex-row-fluid pt-12">
                                <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary" id="kt_modal_upgrade_plan_btn">
                                    <span className="indicator-label">Upgrade Plan</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="kt_modal_create_app" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-900px">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Create App</h2>
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                        <div className="modal-body py-lg-10 px-lg-10">
                            <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
                                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                                    <div className="stepper-nav ps-lg-10">
                                        <div className="stepper-item current" data-kt-stepper-element="nav">
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                    <span className="stepper-number">1</span>
                                                </div>
                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">Details</h3>
                                                    <div className="stepper-desc">Name your App</div>
                                                </div>
                                            </div>
                                            <div className="stepper-line h-40px"></div>
                                        </div>
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                    <span className="stepper-number">2</span>
                                                </div>
                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">Frameworks</h3>
                                                    <div className="stepper-desc">Define your app framework</div>
                                                </div>
                                            </div>
                                            <div className="stepper-line h-40px"></div>
                                        </div>
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                    <span className="stepper-number">3</span>
                                                </div>
                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">Database</h3>
                                                    <div className="stepper-desc">Select the app database type</div>
                                                </div>
                                            </div>
                                            <div className="stepper-line h-40px"></div>
                                        </div>
                                        <div className="stepper-item" data-kt-stepper-element="nav">
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                    <span className="stepper-number">4</span>
                                                </div>
                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">Billing</h3>
                                                    <div className="stepper-desc">Provide payment details</div>
                                                </div>
                                            </div>
                                            <div className="stepper-line h-40px"></div>
                                        </div>
                                        <div className="stepper-item mark-completed" data-kt-stepper-element="nav">
                                            <div className="stepper-wrapper">
                                                <div className="stepper-icon w-40px h-40px">
                                                    <i className="ki-duotone ki-check stepper-check fs-2"></i>
                                                    <span className="stepper-number">5</span>
                                                </div>
                                                <div className="stepper-label">
                                                    <h3 className="stepper-title">Completed</h3>
                                                    <div className="stepper-desc">Review and Submit</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-row-fluid py-lg-5 px-lg-15">
                                    <form className="form" novalidate="novalidate" id="kt_modal_create_app_form">
                                        <div className="current" data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="fv-row mb-10">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                                                        <span className="required">App Name</span>
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify your unique app name">
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </label>
                                                    <input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder="" value="" />
                                                </div>
                                                <div className="fv-row">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                                                        <span className="required">Category</span>
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Select your app category">
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </label>
                                                    <div className="fv-row">
                                                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                                                            <span className="d-flex align-items-center me-2">
                                                                <span className="symbol symbol-50px me-6">
                                                                    <span className="symbol-label bg-light-primary">
                                                                        <i className="ki-duotone ki-compass fs-1 text-primary">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                        </i>
                                                                    </span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="fw-bold fs-6">Quick Online Courses</span>
                                                                    <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
                                                                </span>
                                                            </span>
                                                            <span className="form-check form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="radio" name="category" value="1" />
                                                            </span>
                                                        </label>
                                                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                                                            <span className="d-flex align-items-center me-2">
                                                                <span className="symbol symbol-50px me-6">
                                                                    <span className="symbol-label bg-light-danger">
                                                                        <i className="ki-duotone ki-element-11 fs-1 text-danger">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                            <span className="path3"></span>
                                                                            <span className="path4"></span>
                                                                        </i>
                                                                    </span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="fw-bold fs-6">Face to Face Discussions</span>
                                                                    <span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
                                                                </span>
                                                            </span>
                                                            <span className="form-check form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="radio" name="category" value="2" />
                                                            </span>
                                                        </label>
                                                        <label className="d-flex flex-stack cursor-pointer">
                                                            <span className="d-flex align-items-center me-2">
                                                                <span className="symbol symbol-50px me-6">
                                                                    <span className="symbol-label bg-light-success">
                                                                        <i className="ki-duotone ki-timer fs-1 text-success">
                                                                            <span className="path1"></span>
                                                                            <span className="path2"></span>
                                                                            <span className="path3"></span>
                                                                        </i>
                                                                    </span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="fw-bold fs-6">Full Intro Training</span>
                                                                    <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                                                                </span>
                                                            </span>
                                                            <span className="form-check form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="radio" name="category" value="3" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="fv-row">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                                                        <span className="required">Select Framework</span>
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify your apps framework">
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-warning">
                                                                    <i className="ki-duotone ki-html fs-2x text-warning">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">HTML5</span>
                                                                <span className="fs-7 text-muted">Base Web Projec</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" checked="checked" name="framework" value="1" />
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-success">
                                                                    <i className="ki-duotone ki-react fs-2x text-success">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">ReactJS</span>
                                                                <span className="fs-7 text-muted">Robust and flexible app framework</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="framework" value="2" />
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-danger">
                                                                    <i className="ki-duotone ki-angular fs-2x text-danger">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">Angular</span>
                                                                <span className="fs-7 text-muted">Powerful data mangement</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="framework" value="3" />
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-primary">
                                                                    <i className="ki-duotone ki-vue fs-2x text-primary">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">Vue</span>
                                                                <span className="fs-7 text-muted">Lightweight and responsive framework</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="framework" value="4" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="fv-row mb-10">
                                                    <label className="required fs-5 fw-semibold mb-2">Database Name</label>
                                                    <input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder="" value="master_db" />
                                                </div>
                                                <div className="fv-row">
                                                    <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                                                        <span className="required">Select Database Engine</span>
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Select your app database engine">
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-success">
                                                                    <i className="ki-duotone ki-note text-success fs-2x">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">MySQL</span>
                                                                <span className="fs-7 text-muted">Basic MySQL database</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="dbengine" checked="checked" value="1" />
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer mb-5">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-danger">
                                                                    <i className="ki-duotone ki-google text-danger fs-2x">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">Firebase</span>
                                                                <span className="fs-7 text-muted">Google based app data management</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="dbengine" value="2" />
                                                        </span>
                                                    </label>
                                                    <label className="d-flex flex-stack cursor-pointer">
                                                        <span className="d-flex align-items-center me-2">
                                                            <span className="symbol symbol-50px me-6">
                                                                <span className="symbol-label bg-light-warning">
                                                                    <i className="ki-duotone ki-microsoft text-warning fs-2x">
                                                                        <span className="path1"></span>
                                                                        <span className="path2"></span>
                                                                        <span className="path3"></span>
                                                                        <span className="path4"></span>
                                                                    </i>
                                                                </span>
                                                            </span>
                                                            <span className="d-flex flex-column">
                                                                <span className="fw-bold fs-6">DynamoDB</span>
                                                                <span className="fs-7 text-muted">Microsoft Fast NoSQL Database</span>
                                                            </span>
                                                        </span>
                                                        <span className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="radio" name="dbengine" value="3" />
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100">
                                                <div className="d-flex flex-column mb-7 fv-row">
                                                    <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                        <span className="required">Name On Card</span>
                                                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify a card holder's name">
                                                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                <span className="path1"></span>
                                                                <span className="path2"></span>
                                                                <span className="path3"></span>
                                                            </i>
                                                        </span>
                                                    </label>
                                                    <input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
                                                </div>
                                                <div className="d-flex flex-column mb-7 fv-row">
                                                    <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
                                                    <div className="position-relative">
                                                        <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
                                                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-10">
                                                    <div className="col-md-8 fv-row">
                                                        <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
                                                        <div className="row fv-row">
                                                            <div className="col-6">
                                                                <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                                                                    <option></option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-6">
                                                                <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                                                                    <option></option>
                                                                    <option value="2023">2023</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                    <option value="2026">2026</option>
                                                                    <option value="2027">2027</option>
                                                                    <option value="2028">2028</option>
                                                                    <option value="2029">2029</option>
                                                                    <option value="2030">2030</option>
                                                                    <option value="2031">2031</option>
                                                                    <option value="2032">2032</option>
                                                                    <option value="2033">2033</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 fv-row">
                                                        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                            <span className="required">CVV</span>
                                                            <span className="ms-1" data-bs-toggle="tooltip" title="Enter a card CVV code">
                                                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                    <span className="path3"></span>
                                                                </i>
                                                            </span>
                                                        </label>
                                                        <div className="position-relative">
                                                            <input type="text" className="form-control form-control-solid" minlength="3" maxlength="4" placeholder="CVV" name="card_cvv" />
                                                            <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                                                <i className="ki-duotone ki-credit-cart fs-2hx">
                                                                    <span className="path1"></span>
                                                                    <span className="path2"></span>
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-stack">
                                                    <div className="me-5">
                                                        <label className="fs-6 fw-semibold form-label">Save Card for further billing?</label>
                                                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                    </div>
                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                                                        <span className="form-check-label fw-semibold text-muted">Save Card</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-kt-stepper-element="content">
                                            <div className="w-100 text-center">
                                                <h1 className="fw-bold text-dark mb-3">Release!</h1>
                                                <div className="text-muted fw-semibold fs-3">Submit your app to kickstart your project.</div>
                                                <div className="text-center px-4 py-15">
                                                    <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/illustrations/sketchy-1/9.png" alt="" className="mw-100 mh-300px" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-stack pt-10">
                                            <div className="me-2">
                                                <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                                    <i className="ki-duotone ki-arrow-left fs-3 me-1">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i>Back</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                                    <span className="indicator-label">Submit
                                                        <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i></span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                                <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                                                    <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                    </i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="kt_modal_offer_a_deal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-1000px">
                    <div className="modal-content">
                        <div className="modal-header py-7 d-flex justify-content-between">
                            <h2>Offer a Deal</h2>
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                        <div className="modal-body scroll-y m-5">
                            <div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
                                <div className="stepper-nav justify-content-center py-2">
                                    <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                                        <h3 className="stepper-title">Deal Type</h3>
                                    </div>
                                    <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 className="stepper-title">Deal Details</h3>
                                    </div>
                                    <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                                        <h3 className="stepper-title">Finance Settings</h3>
                                    </div>
                                    <div className="stepper-item" data-kt-stepper-element="nav">
                                        <h3 className="stepper-title">Completed</h3>
                                    </div>
                                </div>
                                <form className="mx-auto mw-500px w-100 pt-15 pb-10" novalidate="novalidate" id="kt_modal_offer_a_deal_form">
                                    <div className="current" data-kt-stepper-element="content">
                                        <div className="w-100">
                                            <div className="mb-13">
                                                <h2 className="mb-3">Deal Type</h2>
                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                </div>
                                            </div>
                                            <div className="fv-row mb-15" data-kt-buttons="true">
                                                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                                                    <input className="btn-check" type="radio" checked="checked" name="offer_type" value="1" />
                                                    <span className="d-flex">
                                                        <i className="ki-duotone ki-profile-circle fs-3hx">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                        </i>
                                                        <span className="ms-4">
                                                            <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>
                                                            <span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
                                                        </span>
                                                    </span>
                                                </label>
                                                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                                                    <input className="btn-check" type="radio" name="offer_type" value="2" />
                                                    <span className="d-flex">
                                                        <i className="ki-duotone ki-element-11 fs-3hx">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </i>
                                                        <span className="ms-4">
                                                            <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>
                                                            <span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                                                    <span className="indicator-label">Offer Details</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-stepper-element="content">
                                        <div className="w-100">
                                            <div className="mb-13">
                                                <h2 className="mb-3">Deal Details</h2>
                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                </div>
                                            </div>
                                            <div className="fv-row mb-8">
                                                <label className="required fs-6 fw-semibold mb-2">Customer</label>
                                                <select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
                                                    <option></option>
                                                    <option value="1" selected="selected">Keenthemes</option>
                                                    <option value="2">CRM App</option>
                                                </select>
                                            </div>
                                            <div className="fv-row mb-8">
                                                <label className="required fs-6 fw-semibold mb-2">Deal Title</label>
                                                <input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" value="Marketing Campaign" />
                                            </div>
                                            <div className="fv-row mb-8">
                                                <label className="fs-6 fw-semibold mb-2">Deal Description</label>
                                                <textarea className="form-control form-control-solid" rows="3" placeholder="Enter Deal Description" name="details_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>
                                            </div>
                                            <div className="fv-row mb-8">
                                                <label className="required fs-6 fw-semibold mb-2">Activation Date</label>
                                                <div className="position-relative d-flex align-items-center">
                                                    <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                                        <span className="path1"></span>
                                                        <span className="path2"></span>
                                                        <span className="path3"></span>
                                                        <span className="path4"></span>
                                                        <span className="path5"></span>
                                                        <span className="path6"></span>
                                                    </i>
                                                    <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
                                                </div>
                                            </div>
                                            <div className="fv-row mb-15">
                                                <div className="d-flex flex-stack">
                                                    <div className="me-5">
                                                        <label className="required fs-6 fw-semibold">Notifications</label>
                                                        <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                                                    </div>
                                                    <div className="d-flex">
                                                        <label className="form-check form-check-custom form-check-solid me-10">
                                                            <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="details_notifications[]" />
                                                            <span className="form-check-label fw-semibold">Email</span>
                                                        </label>
                                                        <label className="form-check form-check-custom form-check-solid">
                                                            <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" checked="checked" name="details_notifications[]" />
                                                            <span className="form-check-label fw-semibold">Phone</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-stack">
                                                <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
                                                <button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
                                                    <span className="indicator-label">Financing</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-stepper-element="content">
                                        <div className="w-100">
                                            <div className="mb-13">
                                                <h2 className="mb-3">Finance</h2>
                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                </div>
                                            </div>
                                            <div className="fv-row mb-8">
                                                <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                    <span className="required">Setup Budget</span>
                                                    <span className="ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div class=&#039;p-4 rounded bg-light&#039;&gt; &lt;div class=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i class=&quot;ki-duotone ki-bank fs-3 me-3&quot;&gt;&lt;span class=&quot;path1&quot;&gt;&lt;/span&gt;&lt;span class=&quot;path2&quot;&gt;&lt;/span&gt;&lt;/i&gt; &lt;div class=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div class=&#039;d-flex flex-stack text-dark fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div class=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;">
                                                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                        </i>
                                                    </span>
                                                </label>
                                                <div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                                                    <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                                                        <i className="ki-duotone ki-minus-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </button>
                                                    <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readonly="readonly" value="$50" />
                                                    <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                                                        <i className="ki-duotone ki-plus-circle fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="fv-row mb-8">
                                                <label className="fs-6 fw-semibold mb-2">Budget Usage</label>
                                                <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                                                    <div className="col-md-6 col-lg-12 col-xxl-6">
                                                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                                                            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                <input className="form-check-input" type="radio" name="finance_usage" value="1" checked="checked" />
                                                            </span>
                                                            <span className="ms-5">
                                                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
                                                                <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-6 col-lg-12 col-xxl-6">
                                                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                            <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                <input className="form-check-input" type="radio" name="finance_usage" value="2" />
                                                            </span>
                                                            <span className="ms-5">
                                                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                                                                <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fv-row mb-15">
                                                <div className="d-flex flex-stack">
                                                    <div className="me-5">
                                                        <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                                                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                    </div>
                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="1" name="finance_allow" checked="checked" />
                                                        <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-stack">
                                                <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
                                                <button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
                                                    <span className="indicator-label">Build Team</span>
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-stepper-element="content">
                                        <div className="w-100">
                                            <div className="mb-13">
                                                <h2 className="mb-3">Deal Created!</h2>
                                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                                </div>
                                            </div>
                                            <div className="d-flex flex-center pb-20">
                                                <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
                                                <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
                                            </div>
                                            <div className="text-center px-4">
                                                <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/illustrations/sketchy-1/20.png" alt="" className="mw-100 mh-300px" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            <div className="text-center mb-13">
                                <h1 className="mb-3">Search Users</h1>
                                <div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
                            </div>
                            <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
                                <form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
                                    <input type="hidden" />
                                    <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                    <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                                    <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                                        <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                                    </span>
                                    <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                        </i>
                                    </span>
                                </form>
                                <div className="py-5">
                                    <div data-kt-search-element="suggestions">
                                        <h3 className="fw-semibold mb-5">Recently searched:</h3>
                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg" />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                                                    <span className="badge badge-light">Art Director</span>
                                                </div>
                                            </a>
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                                                    <span className="badge badge-light">Marketing Analytic</span>
                                                </div>
                                            </a>
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                                                    <span className="badge badge-light">Software Enginer</span>
                                                </div>
                                            </a>
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-5.jpg" />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                                                    <span className="badge badge-light">Web Developer</span>
                                                </div>
                                            </a>
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                                </div>
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                                                    <span className="badge badge-light">UI/UX Designer</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-kt-search-element="results" className="d-none">
                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                        <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" selected="selected">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                        <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" selected="selected">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                        <div className="fw-semibold text-muted">max@kt.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-5.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                        <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" selected="selected">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                        <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                        <div className="fw-semibold text-muted">mik@pex.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" selected="selected">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                        <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                        <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" selected="selected">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                        <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" selected="selected">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-23.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                        <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                        <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" selected="selected">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-12.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                        <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" selected="selected">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                        <div className="fw-semibold text-muted">robert@benko.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                        <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                        <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" selected="selected">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-21.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                        <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" selected="selected">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                                                <div className="d-flex align-items-center">
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
                                                    </label>
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                                    </div>
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                        <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                    </div>
                                                </div>
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" selected="selected">Can Edit</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-center mt-15">
                                            <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
                                            <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
                                        </div>
                                    </div>
                                    <div data-kt-search-element="empty" className="text-center d-none">
                                        <div className="fw-semibold py-10">
                                            <div className="text-gray-600 fs-3 mb-2">No users found</div>
                                            <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                                        </div>
                                        <div className="text-center px-5">
                                            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog mw-650px">
                    <div className="modal-content">
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-duotone ki-cross fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>
                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            <div className="text-center mb-13">
                                <h1 className="mb-3">Invite a Friend</h1>
                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.
                                </div>
                            </div>
                            <div className="btn btn-light-primary fw-bold w-100 mb-8">
                                <img alt="Logo" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts
                            </div>
                            <div className="separator d-flex flex-center mb-8">
                                <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
                            </div>
                            <textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
                            <div className="mb-10">
                                <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                                <div className="mh-300px scroll-y me-n7 pe-7">
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-6.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" selected="selected">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                <div className="fw-semibold text-muted">melody@altbox.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" selected="selected">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                <div className="fw-semibold text-muted">max@kt.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-5.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                <div className="fw-semibold text-muted">sean@dellito.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" selected="selected">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-25.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                <div className="fw-semibold text-muted">brian@exchange.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                <div className="fw-semibold text-muted">mik@pex.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" selected="selected">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-9.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" selected="selected">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" selected="selected">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-23.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                <div className="fw-semibold text-muted">dam@consilting.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                <div className="fw-semibold text-muted">emma@intenso.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" selected="selected">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-12.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" selected="selected">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                <div className="fw-semibold text-muted">robert@benko.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-13.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                <div className="fw-semibold text-muted">miller@mapple.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" selected="selected">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-21.jpg" />
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" selected="selected">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-stack py-4">
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                            </div>
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                            </div>
                                        </div>
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" selected="selected">Can Edit</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-stack">
                                <div className="me-5 fw-semibold">
                                    <label className="fs-6">Adding Users by Team Members</label>
                                    <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                                </div>
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                                    <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )

}

export default DefaultLayout