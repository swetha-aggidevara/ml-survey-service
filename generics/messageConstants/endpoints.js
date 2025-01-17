/**
 * name : messageConstants/endpoints.js
 * author : Aman
 * Date : 04-May-2020
 * Description : All service endpoints
 */

module.exports = {
    // GET_IMPROVEMENT_PROJECTS : "api/v1/template/getImprovementProjects", // Unnati service
    DOWNLOADABLE_GCP_URL : "/v1/cloud-services/gcp/getDownloadableUrl", // Kendra service
    DOWNLOADABLE_AWS_URL : "/v1/cloud-services/aws/getDownloadableUrl", // Kendra service
    DOWNLOADABLE_AZURE_URL : "/v1/cloud-services/azure/getDownloadableUrl", // Kendra service
    UPLOAD_FILE : "/v1/cloud-services/gcp/uploadFile",  // Kendra service
    GET_APP_DETAILS : "/v1/apps/details", // Kendra service
    GET_USERS_BY_ENTITY_AND_ROLE : "/v1/entities/getUsersByEntityAndRole", //kendra service
    SOLUTIONS_BASED_ON_ROLE_LOCATION : "/v1/solutions/forUserRoleAndLocation",
    SOLUTION_DETAILS_BASED_ON_ROLE_LOCATION : "/v1/solutions/detailsBasedOnRoleAndLocation",
    GET_PROJECT_TEMPLATE_LISTS : "/v1/project/templates/listByIds",
    DOWNLOADABLE_FILE_URL: "/v1/cloud-services/files/getDownloadableUrl",
    USER_READ : "/user/v1/read",
    USER_READ_V5 : "/v5/user/read"
}