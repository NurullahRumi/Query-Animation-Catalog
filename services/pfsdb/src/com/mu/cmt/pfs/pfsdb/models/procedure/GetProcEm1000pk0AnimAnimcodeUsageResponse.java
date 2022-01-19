/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.models.procedure;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/


import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import com.wavemaker.runtime.data.annotations.ColumnAlias;

public class GetProcEm1000pk0AnimAnimcodeUsageResponse implements Serializable {


    @ColumnAlias("pOutOrderlist")
    private List<GetProcEm1000pk0AnimAnimcodeUsageResponsePoutOrderlist> poutOrderlist;

    public List<GetProcEm1000pk0AnimAnimcodeUsageResponsePoutOrderlist> getPoutOrderlist() {
        return this.poutOrderlist;
    }

    public void setPoutOrderlist(List<GetProcEm1000pk0AnimAnimcodeUsageResponsePoutOrderlist> poutOrderlist) {
        this.poutOrderlist = poutOrderlist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof GetProcEm1000pk0AnimAnimcodeUsageResponse)) return false;
        final GetProcEm1000pk0AnimAnimcodeUsageResponse getProcEm1000pk0animAnimcodeUsageResponse = (GetProcEm1000pk0AnimAnimcodeUsageResponse) o;
        return Objects.equals(getPoutOrderlist(), getProcEm1000pk0animAnimcodeUsageResponse.getPoutOrderlist());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPoutOrderlist());
    }
}