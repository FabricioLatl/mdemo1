

import DefaultLayout from "../layouts/default"
import BreadcumbLayout from "../layouts/elements/breadcrumb"

import UserHeader from "./components/user_header"
import UserForm from "./components/user_form"
const PageGuide = () => {

    return (
        <DefaultLayout>
            <BreadcumbLayout />
            <div id="kt_app_content_container" class="app-container container-xxl">

                {/* <!--begin::Row--> */}
                <UserHeader />
                <UserForm />
            </div>
        </DefaultLayout>
    )
}

export default PageGuide