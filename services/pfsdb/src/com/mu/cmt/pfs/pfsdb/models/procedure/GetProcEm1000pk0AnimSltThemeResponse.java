/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcEm1000pk0AnimSltThemeResponse implements Serializable {


    @ColumnAlias("pOutTheme")
    private List<GetProcEm1000pk0AnimSltThemeResponsePoutTheme> poutTheme;

    public List<GetProcEm1000pk0AnimSltThemeResponsePoutTheme> getPoutTheme() {
        return this.poutTheme;
    }

    public void setPoutTheme(List<GetProcEm1000pk0AnimSltThemeResponsePoutTheme> poutTheme) {
        this.poutTheme = poutTheme;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcEm1000pk0AnimSltThemeResponse)) return false;
        final GetProcEm1000pk0AnimSltThemeResponse getProcEm1000pk0animSltThemeResponse = (GetProcEm1000pk0AnimSltThemeResponse) o;
        return Objects.equals(getPoutTheme(), getProcEm1000pk0animSltThemeResponse.getPoutTheme());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutTheme());
    }
}