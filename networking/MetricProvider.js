import {HTTP} from "../config/HttpBase";
import { CARRERS_TOP, METRICS, DOWNLOAD_PDFS, DOWNLOAD_STATUS, EXIST_PDF, REGENERATE_PDF } from "../config/WebService";

export const getTopCarrers = async (schoolId, schoolBusinessId, year, startDate, endDate) => {
    schoolId = schoolId == undefined || schoolId == null ? "": schoolId;
    schoolBusinessId = schoolBusinessId == undefined || schoolBusinessId == null ? "": schoolBusinessId;

    return HTTP.post(CARRERS_TOP, {schoolId: schoolId, vocationalGuidanceId: "19680012-6383-4737-ae1c-d5836df16afc", schoolBusinessId: schoolBusinessId, studentGraduationYear: year+"", filter: [startDate, endDate]});
}

export const downloadPDFs = async (data) => {
    return HTTP.post(DOWNLOAD_PDFS, data);
}

export const regeneratePDF = async (data) => {
    return HTTP.delete(REGENERATE_PDF, data);
}

export const downloadPdfStatus = async (groupId, psychologyId, studentIds) => {
    return HTTP.post(DOWNLOAD_STATUS, {groupId: groupId, psychologyId: psychologyId, studentIds: studentIds});
}

export const filterMetrics = async (schoolId, section, year, schoolBusinessId, startDate, endDate) => {
    schoolId = schoolId == undefined || schoolId == null ? "": schoolId;
    console.log(startDate, endDate);
    //@ts-ignore
    startDate.replaceAll("-", "/");
    //@ts-ignore
    endDate.replaceAll("-", "/");
    console.log(startDate, endDate);
    schoolBusinessId = schoolBusinessId == undefined || schoolBusinessId == null ? "": schoolBusinessId;
    return HTTP.post(METRICS, {schoolId: schoolId, section:section, year: year, schoolBusinessId: schoolBusinessId, filter: [startDate, endDate]});
}

export const getExistFile = async (student) => {
    return HTTP.post(EXIST_PDF, {student: student});
}
